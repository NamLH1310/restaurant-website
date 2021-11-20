# Generated by Django 3.2.9 on 2021-11-20 05:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_rename_category_category_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='description',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='order',
            name='time',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
