# Generated by Django 4.1.2 on 2022-12-15 00:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('UsagerApp', '0015_remove_usagers_motpasse_md5'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usagers',
            name='motPasse',
            field=models.CharField(max_length=50),
        ),
    ]