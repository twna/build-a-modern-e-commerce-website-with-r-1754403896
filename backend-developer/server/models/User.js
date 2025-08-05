from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    # Additional fields can be added here if needed
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    # You can also add methods to the User model
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
{
  "checklist": [
    {
      "task": "Extend Django's AbstractUser",
      "completed": true
    },
    {
      "task": "Add phone_number field",
      "completed": true
    },
    {
      "task": "Add address field",
      "completed": true
    },
    {
      "task": "Add get_full_name method",
      "completed": true
    },
    {
      "task": "Run migrations to update the database",
      "completed": false
    }
  ]
}