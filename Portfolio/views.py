from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.core.mail import EmailMessage
from Portfolio import settings

def home(request):
    """Serves the single-page portfolio."""
    return render(request, 'index.html')

@require_POST
def contact(request):
    """
    Handles the contact form submission via AJAX (fetch).
    Returns JSON so the single-page frontend can handle it without a reload.
    """
    first_name = request.POST.get('fname', '').strip()
    last_name  = request.POST.get('lname', '').strip()
    email      = request.POST.get('email', '').strip()
    subject    = request.POST.get('subject', '').strip()
    message    = request.POST.get('message', '').strip()

    # ── 1. Validation ───────────────────────────────────────────
    if not all([first_name, last_name, email, subject, message]):
        return JsonResponse({
            'status': 'error',
            'message': 'Please fill in all fields before submitting.',
        }, status=400)

    try:
        validate_email(email)
    except ValidationError:
        return JsonResponse({
            'status': 'error',
            'message': 'Please enter a valid email address.',
        }, status=400)

    # ── 2. Construct Email Payload ──────────────────────────────
    full_message = (
        f"Name   : {first_name} {last_name}\n"
        f"From   : {email}\n"
        f"Subject: {subject}\n"
        f"{'─' * 40}\n\n"
        f"{message}"
    )

    # ── 3. Attempt to Dispatch Email ────────────────────────────
    try:
        msg = EmailMessage(
            subject=f"[Portfolio] {subject}",
            body=full_message,
            from_email=settings.EMAIL_HOST_USER,
            to=[settings.CONTACT_RECIPIENT_EMAIL],
            reply_to=[email],
        )

        print("HOST:", settings.EMAIL_HOST)
        print("PORT:", settings.EMAIL_PORT)
        print("SSL:", settings.EMAIL_USE_SSL)
        print("TLS:", settings.EMAIL_USE_TLS)
        print("USER:", settings.EMAIL_HOST_USER)
        msg.send(fail_silently=False)
        return JsonResponse({
            'status': 'success',
            'message': 'Message sent successfully!'
        })
    except Exception as e:
        # This catches the backend connection crash and passes the text description to your front-end console
        return JsonResponse({
            'status': 'error',
            'message': f'Mail Server Error: {str(e)}'
        }, status=500)
