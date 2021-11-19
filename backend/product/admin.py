from django.contrib import admin

# Register your models here.

from .models import Product, Category, Employee, Shift, Order

admin.site.register(Product)
admin.site.register(Category)
admin.site.register(Employee)
admin.site.register(Shift)
admin.site.register(Order)