# Generated by Django 5.0.7 on 2024-07-25 07:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('checklist', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='repeat_on',
            field=models.ManyToManyField(blank=True, related_name='todos', to='checklist.day'),
        ),
    ]