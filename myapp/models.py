<<<<<<< HEAD

from django.db import models

=======
>>>>>>> 545825f95ca76ddbea56f6842e04aafd1ed77413
from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=254)
    subject = models.CharField(max_length=200)
    message = models.TextField()

    class Meta:
        db_table = 'contact'

    def __str__(self):
        return f"{self.name} - {self.subject}"

<<<<<<< HEAD


from django.db import models

=======
>>>>>>> 545825f95ca76ddbea56f6842e04aafd1ed77413
class Booking(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    date = models.DateField()
    table = models.CharField(max_length=50)
    message = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'booking'

    def __str__(self):
        return f"{self.name} - {self.date}"

<<<<<<< HEAD

from django.db import models

=======
>>>>>>> 545825f95ca76ddbea56f6842e04aafd1ed77413
class UserAccount(models.Model):
    username = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=255)

    class Meta:
        db_table = 'signup'

    def __str__(self):
        return self.username

<<<<<<< HEAD

from django.db import models

=======
>>>>>>> 545825f95ca76ddbea56f6842e04aafd1ed77413
class UserProfile(models.Model):
    username = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=255)

    class Meta:
        db_table = 'register'

    def __str__(self):
        return self.username

<<<<<<< HEAD

from django.db import models


=======
>>>>>>> 545825f95ca76ddbea56f6842e04aafd1ed77413
class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)

<<<<<<< HEAD


    class Meta:
        db_table = 'books'




from django.db import models

=======
    class Meta:
        db_table = 'books'

>>>>>>> 545825f95ca76ddbea56f6842e04aafd1ed77413
class Login(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    class Meta:
<<<<<<< HEAD
        db_table = 'login'  # Correct - class Meta ke andar sirf inner options hone chahiye

    def __str__(self):
        return self.username





=======
        db_table = 'login'

    def __str__(self):
        return self.username
>>>>>>> 545825f95ca76ddbea56f6842e04aafd1ed77413
