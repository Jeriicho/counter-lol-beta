# Generated by Django 2.0.3 on 2018-03-21 09:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('champions', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='champion',
            name='lane',
        ),
        migrations.AddField(
            model_name='champion',
            name='lane',
            field=models.ManyToManyField(to='champions.Lane'),
        ),
    ]
