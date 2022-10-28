from django.db import models

# Create your models here.

class NiveauAcces(models.Model):
    accesId =  models.AutoField(primary_key=True)
    access = models.CharField(max_length=355,null=False)

class Usagers(models.Model):
    usagerId = models.AutoField(primary_key=True)
    login = models.CharField(max_length=255,null=False)
    prenomUsager = models.CharField(max_length=255,null=False)
    nomUsager = models.CharField(max_length=255,null=False)
    motPasse = models.TextField(null=False)
    accesId = models.ForeignKey("NiveauAcces", on_delete=models.CASCADE)

class UsagersFermes(models.Model):
    usagersFermesId =  models.AutoField(primary_key=True)
    login = models.ForeignKey("Usagers", on_delete=models.CASCADE)
    fermeId = models.ForeignKey("Fermes", on_delete=models.CASCADE)

class Fermes(models.Model):
    fermeId =  models.AutoField(primary_key=True)
    nomFerme = models.CharField(max_length=255,null=False)
    addresseFerme = models.CharField(max_length=255,null=False)
    villeFerme = models.CharField(max_length=255,null=False)
    provinceFerme = models.CharField(max_length=255,null=True)

class Experiences(models.Model):
    experienceId = models.AutoField(primary_key=True)
    dateExperience = models.DateField(auto_now_add=True,null=False)
    nomCategorie = models.CharField(max_length=255,null=False)
    nomSousCategorie = models.CharField(max_length=255,null=False)
    fermeId = models.ForeignKey("Fermes", on_delete=models.CASCADE)