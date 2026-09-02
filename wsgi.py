import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'rastaurant.settings')

application = get_wsgi_application()
app = application  # Vercel deployment ke liye zaruri hai