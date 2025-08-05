from django.db import models
from django.utils import timezone

class Order(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('processing', 'Processing'),
        ('shipped', 'Shipped'),
        ('delivered', 'Delivered'),
        ('cancelled', 'Cancelled'),
    ]

    customer = models.ForeignKey('Customer', on_delete=models.CASCADE)
    order_date = models.DateTimeField(default=timezone.now)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    shipping_address = models.TextField()
    billing_address = models.TextField()

    def __str__(self):
        return f"Order {self.id} - {self.customer.name}"

    # Additional methods can be added here, such as calculating totals or updating status
{
  "checklist": [
    {
      "item": "Create Order model",
      "completed": true
    },
    {
      "item": "Define fields: customer, order_date, status, total_amount, shipping_address, billing_address",
      "completed": true
    },
    {
      "item": "Set default values where appropriate",
      "completed": true
    },
    {
      "item": "Define status choices",
      "completed": true
    },
    {
      "item": "Implement __str__ method",
      "completed": true
    },
    {
      "item": "Ensure model can be managed via admin",
      "completed": true
    }
  ]
}