# Dheeraj Malviya - Developer Portfolio

A modern and responsive portfolio website built with **Django**, showcasing my projects, skills, publications, and professional experience.

## 🚀 Features

* Modern and responsive UI
* Dark/Light theme support
* Project showcase section
* Skills and technologies section
* Contact form with email integration
* Resume viewing and download
* GitHub and LinkedIn integration
* Smooth animations and interactive design

## 🛠️ Tech Stack

### Backend

* Python
* Django

### Frontend

* HTML5
* CSS3
* JavaScript

### Deployment

* Render
* WhiteNoise (Static File Serving)

## 📂 Project Structure

```text
Portfolio/
│
├── Portfolio/
│   ├── static/
│   │   ├── css/
│   │   ├── js/
│   │   └── files/
│   ├── settings.py
│   └── urls.py
│
├── templates/
├── manage.py
├── requirements.txt
└── README.md
```

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2. Create Virtual Environment

```bash
python -m venv venv
```

Activate:

**Windows**

```bash
venv\Scripts\activate
```

**Linux/Mac**

```bash
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Create Environment Variables

Create a `.env` file:

```env
SECRET_KEY=your_secret_key

EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your_email@gmail.com
EMAIL_HOST_PASSWORD=your_app_password
DEFAULT_FROM_EMAIL=your_email@gmail.com

CONTACT_RECIPIENT_EMAIL=your_email@gmail.com
```

### 5. Run Migrations

```bash
python manage.py migrate
```

### 6. Collect Static Files

```bash
python manage.py collectstatic --noinput
```

### 7. Start Development Server

```bash
python manage.py runserver
```

Open:

```text
http://127.0.0.1:8000/
```

## 📌 Featured Sections

* About Me
* Skills & Technologies
* Projects
* Publications
* Resume
* Contact Form

## 📄 Resume

The portfolio includes a downloadable and viewable PDF resume available directly from the website.

## 🌐 Connect With Me

* GitHub: https://github.com/DheerajDev-leper
* LinkedIn: https://www.linkedin.com/in/dheeraj-malviya-coder25/
* Email: [dheerajsmalviya@gmail.com](mailto:dheerajsmalviya@gmail.com)


