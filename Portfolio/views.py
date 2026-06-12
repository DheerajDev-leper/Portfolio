from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.core.mail import EmailMessage
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.conf import settings          


def home(request):
    return render(request, 'index.html')


@require_POST
def contact(request):
    first_name = request.POST.get('fname', '').strip()
    last_name  = request.POST.get('lname', '').strip()
    email      = request.POST.get('email', '').strip()
    subject    = request.POST.get('subject', '').strip()
    message    = request.POST.get('message', '').strip()

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

    full_message = (
        f"Name   : {first_name} {last_name}\n"
        f"From   : {email}\n"
        f"Subject: {subject}\n"
        f"{'─' * 40}\n\n"
        f"{message}"
    )

    try:
        msg = EmailMessage(
            subject=f"[Portfolio] {subject}",
            body=full_message,
            from_email=settings.EMAIL_HOST_USER,
            to=[settings.CONTACT_RECIPIENT_EMAIL],
            reply_to=[email],
        )
        msg.send(fail_silently=False)
        return JsonResponse({
            'status': 'success',
            'message': "Message sent! I'll get back to you within 24 hours.",
        })
    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': f'Something went wrong: {str(e)}',
        }, status=500)


def debug_check(request):
    from django.conf import settings
    return JsonResponse({
        'EMAIL_BACKEND': settings.EMAIL_BACKEND,
        'EMAIL_HOST': settings.EMAIL_HOST,
        'EMAIL_PORT': settings.EMAIL_PORT,
        'EMAIL_USE_TLS': settings.EMAIL_USE_TLS,
        'EMAIL_HOST_USER': settings.EMAIL_HOST_USER,
        'EMAIL_HOST_PASSWORD': '***' if settings.EMAIL_HOST_PASSWORD else 'MISSING',
        'CONTACT_RECIPIENT_EMAIL': settings.CONTACT_RECIPIENT_EMAIL,
    })
