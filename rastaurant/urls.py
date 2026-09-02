"""
URL configuration for rastaurant project.
"""
from django.contrib import admin
from django.urls import path, include
from myapp import views

urlpatterns = [
    # Admin Panel
    path('admin/', admin.site.urls),

    # Main Pages
    path('', views.home, name='home'),
    path('index/', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('menu/', views.menu, name='menu'),
    path('service/', views.service, name='service'),
    path('team/', views.team, name='team'),
    path('testimonial/', views.testimonial, name='testimonial'),
    path('form/', views.contact, name='form'),
    path('booking/', views.booking, name='booking'),
    path('order/', views.order, name='order'),

    # Auth Pages
    path('signup/', views.signup_view, name='signup'),
    path('login/', views.login_view, name='login'),
    path('register/', views.register_view, name='register'),

    # Library Management Routes
    path('library_home/', views.library_home, name='library_home'),
    path('add_book/', views.add_book, name='add_book'),
    path('book_list/', views.book_list, name='book_list'),
    path('update_book/', views.update_book, name='update_book'),
    path('book/<int:book_id>/', views.book_detail, name='book_detail'),

    # Corporate / Product Pages
    path('platform/', views.platform, name='platform'),
    path('products/', views.products, name='products'),
    path('why-zecurix/', views.why_zecurix, name='why_zecurix'),
    path('resources/', views.resources, name='resources'),
    path('company/', views.company, name='company'),
    path('solutions/', views.solutions, name='solutions'),
]