from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.core.mail import send_mail
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from Portfolio import settings


def home(request):
    """Serves the single-page portfolio."""
    return render(request, 'index.html')


@require_POST
def contact(request):
    """
    Handles the contact form submission via AJAX (fetch).
    Expects JSON or form-encoded POST data.
    Returns JSON so the single-page frontend can handle it without a reload.
    """
    first_name = request.POST.get('fname', '').strip()
    last_name  = request.POST.get('lname', '').strip()
    email      = request.POST.get('email', '').strip()
    subject    = request.POST.get('subject', '').strip()
    message    = request.POST.get('message', '').strip()

    # ── Validation ──────────────────────────────────────────────
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

    # ── Send mail ────────────────────────────────────────────────
    full_message = (
        f"Name   : {first_name} {last_name}\n"
        f"From   : {email}\n"
        f"Subject: {subject}\n"
        f"{'─' * 40}\n\n"
        f"{message}"
    )

    try:
        send_mail(
            subject=f"[Portfolio] {subject}",
            message=full_message,
            from_email=email,
            recipient_list=[settings.EMAIL_HOST_USER],
            fail_silently=False,
        )
        return JsonResponse({
            'status': 'success',
            'message': "Message sent! I'll get back to you within 24 hours.",
        })
    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': f'Something went wrong: {str(e)}',
        }, status=500)