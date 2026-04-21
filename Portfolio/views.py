from django.shortcuts import render

def home(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'pages/about.html')

def projects(request):
    return render(request, 'pages/projects.html')

def contact(request):
    return render(request, 'pages/contact.html')

def skills(request):
    return render(request, 'pages/skills.html')