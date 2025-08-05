from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
{
  "checklist": [
    {"task": "Create Product model", "status": "complete"},
    {"task": "Define name field", "status": "complete"},
    {"task": "Define description field", "status": "complete"},
    {"task": "Define price field", "status": "complete"},
    {"task": "Define stock field", "status": "complete"},
    {"task": "Add created_at field", "status": "complete"},
    {"task": "Add updated_at field", "status": "complete"}
  ]
}