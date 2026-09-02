from django.contrib import admin
from django.urls import path, include
from myapp import views

urlpatterns = [
    # Admin Panel
    path('admin/', admin.site.urls),
    path('', include('myapp.urls')),
    
    # Restaurant Main Pages
    path('home/', views.home, name='home'),
    path('index/', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('menu/', views.menu, name='menu'),
    path('service/', views.service, name='service'),
    path('team/', views.team, name='team'),
    path('testimonial/', views.testimonial, name='testimonial'),
    path('booking/', views.booking, name='booking'),
    path('order/', views.order, name='order'),

    # Auth Pages
    path('signup/', views.signup_view, name='signup'),
    path('login/', views.login_view, name='login'),
    path('register/', views.register_view, name='register'),
]