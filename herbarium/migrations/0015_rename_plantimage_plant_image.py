# Generated by Django 4.1 on 2022-10-08 22:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('herbarium', '0014_rename_plantimages_plantimage'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='PlantImage',
            new_name='Plant_image',
        ),
    ]
