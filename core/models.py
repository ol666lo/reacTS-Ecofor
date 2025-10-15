from django.db import models


class User(models.Model):
 username = models.CharField(max_length=20)
 password = models.CharField(max_length=20)
 email = models.CharField(max_length=30)
 def __str__(self):
      return self.username

class Cats(models.Model):
 id = models.CharField(max_length=255,primary_key=True)
 name = models.CharField(max_length=255)
 origin = models.CharField(max_length=255)
 temperament = models.CharField(max_length=255)
 life_span =  models.CharField(max_length=255)
 description = models.CharField(max_length=255)
 breed_name = models.CharField(max_length=255)
 breed_id = models.CharField(max_length=10)
 reference_image_id =  models.CharField(max_length=30)
#  img_url = models.CharField(max_length=255)
 def __str__(self):
      return self.id
 
class FavoriteBreed(models.Model):
 user = models.ForeignKey(User, on_delete=models.CASCADE)
 breed_id = models.CharField(max_length=10)  # ej: "abys"
 breed_name = models.CharField(max_length=100)
 breed_data = models.JSONField()  # Cachear info completa
 is_available = models.BooleanField(default=True)
 last_updated = models.DateTimeField(auto_now=True)
 created_at = models.DateTimeField(auto_now_add=True)
 def __str__(self):
      return self.breed_id