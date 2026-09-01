from django import forms
from .models import Booking

class BookingForm(forms.ModelForm):
    class Meta:
        model = Booking
        fields = ['name', 'email', 'date', 'table', 'special_request']
        widgets = {
            'date': forms.DateInput(attrs={'type': 'date'}),  # ✅ HTML date picker
        }
