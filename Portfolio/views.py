from django.shortcuts import render

import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.core.mail import send_mail
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.conf import settings

def home(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'pages/about.html')

def projects(request):
    return render(request, 'pages/projects.html')

# @csrf_exempt  # Remove this if you add the CSRF token to your frontend fetch
# @require_http_methods(["POST"])
def contact(request):
    """
    POST /api/contact/
    Body (JSON): { first_name, last_name, email, subject, message }
    Returns:     200 on success, 400 on validation error, 500 on mail failure
    """

    # ── 1. Parse JSON body ──────────────────────────────────────────────────
    try:
        data = json.loads(request.body)
    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON."}, status=400)

    # ── 2. Extract fields ────────────────────────────────────────────────────
    first_name = data.get("first_name", "").strip()
    last_name  = data.get("last_name", "").strip()
    email      = data.get("email", "").strip()
    subject    = data.get("subject", "Portfolio Contact").strip()
    message    = data.get("message", "").strip()

    # ── 3. Validate required fields ──────────────────────────────────────────
    errors = {}

    if not first_name:
        errors["first_name"] = "First name is required."

    if not email:
        errors["email"] = "Email is required."
    else:
        try:
            validate_email(email)
        except ValidationError:
            errors["email"] = "Enter a valid email address."

    if not message:
        errors["message"] = "Message cannot be empty."

    if len(message) > 5000:
        errors["message"] = "Message is too long (max 5000 characters)."

    if errors:
        return JsonResponse({"errors": errors}, status=400)

    # ── 4. Build email content ───────────────────────────────────────────────
    full_name    = f"{first_name} {last_name}".strip()
    email_subject = f"[Portfolio Contact] {subject}"
    email_body    = (
        f"New message from your portfolio contact form:\n"
        f"{'─' * 40}\n"
        f"Name    : {full_name}\n"
        f"Email   : {email}\n"
        f"Subject : {subject}\n"
        f"{'─' * 40}\n\n"
        f"{message}\n\n"
        f"{'─' * 40}\n"
        f"Reply directly to: {email}"
    )

    # ── 5. Send email ────────────────────────────────────────────────────────
    try:
        send_mail(
            subject      = email_subject,
            message      = email_body,
            from_email   = settings.DEFAULT_FROM_EMAIL,
            recipient_list = [settings.CONTACT_RECIPIENT_EMAIL],
            fail_silently  = False,
        )
    except Exception as e:
        # Log the error in production (replace print with logging)
        print(f"[Contact Form] Mail error: {e}")
        return JsonResponse(
            {"error": "Failed to send message. Please try again later."},
            status=500
        )

    # ── 6. Optional: save to DB (uncomment if you add a ContactMessage model)
    # ContactMessage.objects.create(
    #     first_name=first_name,
    #     last_name=last_name,
    #     email=email,
    #     subject=subject,
    #     message=message,
    # )

    return JsonResponse({"success": True, "message": "Message sent successfully."}, status=200)

def skills(request):
    return render(request, 'pages/skills.html')