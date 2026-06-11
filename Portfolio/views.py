from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import ensure_csrf_cookie
from django.core.mail import send_mail
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from Portfolio import settings


@ensure_csrf_cookie
def home(request):
    return render(request, "index.html")


@require_POST
def contact(request):
    first_name = request.POST.get("fname", "").strip()
    last_name = request.POST.get("lname", "").strip()
    email = request.POST.get("email", "").strip()
    subject = request.POST.get("subject", "").strip()
    message = request.POST.get("message", "").strip()

    # Validation
    if not all([first_name, last_name, email, subject, message]):
        return JsonResponse(
            {
                "status": "error",
                "message": "Please fill in all fields."
            },
            status=400
        )

    try:
        validate_email(email)
    except ValidationError:
        return JsonResponse(
            {
                "status": "error",
                "message": "Please enter a valid email address."
            },
            status=400
        )

    full_message = f"""
New Portfolio Contact Form Submission

Name: {first_name} {last_name}
Email: {email}
Subject: {subject}

Message:
{message}
"""

    try:
        send_mail(
            subject=f"[Portfolio] {subject}",
            message=full_message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.CONTACT_RECIPIENT_EMAIL],
            fail_silently=False,
        )

        return JsonResponse(
            {
                "status": "success",
                "message": "Message sent successfully!"
            }
        )

    except Exception as e:
        print("EMAIL ERROR:", str(e))

        return JsonResponse(
            {
                "status": "error",
                "message": str(e)
            },
            status=500
        )