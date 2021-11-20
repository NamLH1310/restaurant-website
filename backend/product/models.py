from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    icon = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    quantity = models.IntegerField(default=0)
    img = models.CharField(max_length=100)
    category = models.ManyToManyField(Category, blank=True)
    description = models.CharField(max_length=255, default='')
    is_top = models.BooleanField(default=False)
    
    def __str__(self) -> str:
        return self.name

class Shift(models.Model):
    shift = models.IntegerField(default=0)
    
    def __str__(self) -> str:
        return f'Shift: {self.shift}'

class Employee(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=True)
    phone_number = models.CharField(max_length=10, blank=True)
    shifts = models.ManyToManyField(Shift, blank=True)
    
    def __str__(self):
        return self.name
    

class Order(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    cost = models.IntegerField(default=0)
    time = models.DateTimeField(auto_now=True)
    phone_number = models.CharField(max_length=10)
    
    def __str__(self):
        return self.name