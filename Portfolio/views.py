from django.shortcuts import render
from django.core.mail import send_mail
from Portfolio import settings


def home(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'pages/about.html')

def projects(request):
    return render(request, 'pages/projects.html')


def contact(request):
    context = {}

    if request.method == 'POST':
        first_name = request.POST.get('fname', '').strip()
        last_name  = request.POST.get('lname', '').strip()
        email      = request.POST.get('email', '').strip()
        subject    = request.POST.get('subject', '').strip()
        message    = request.POST.get('message', '').strip()

        if first_name and last_name and email and subject and message:
            full_message = (
                f"Name: {first_name} {last_name}\n"
                f"From: {email}\n\n"
                f"{message}"
            )
            try:
                send_mail(
                    subject,                      # subject line
                    full_message,                 # body
                    email,                        # from (sender's address)
                    [settings.EMAIL_HOST_USER],   # to (your inbox)
                    fail_silently=False,
                )
                context['result']  = 'success'
                context['message'] = 'Message sent! I\'ll get back to you within 24 hours.'
            except Exception as e:
                context['result']  = 'error'
                context['message'] = f'Something went wrong: {str(e)}'
        else:
            context['result']  = 'error'
            context['message'] = 'Please fill in all fields before submitting.'

    return render(request, 'pages/contact.html', context)


def skills(request):
    return render(request, 'pages/skills.html')