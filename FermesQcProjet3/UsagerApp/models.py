from django.db import models

# Create your models here.

class NiveauAcces(models.Model):
    accesId =  models.AutoField(primary_key=True)
    access = models.CharField(max_length=255,null=False, unique=True)

class Usagers(models.Model):
    usagerId = models.AutoField(primary_key=True)
    login = models.CharField(max_length=255,null=False, unique=True)
    prenomUsager = models.CharField(max_length=255,null=False)
    nomUsager = models.CharField(max_length=255,null=False)
    motPasse = models.TextField(null=False)
    accesId = models.ForeignKey("NiveauAcces", on_delete=models.CASCADE)

class UsagersFermes(models.Model):
    usagersFermesId =  models.AutoField(primary_key=True)
    usagerId = models.ForeignKey("Usagers", on_delete=models.CASCADE)
    fermeId = models.ForeignKey("Fermes", on_delete=models.PROTECT)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['usagerId','fermeId'], name='uniqueUsagerFerme')
        ]

class Fermes(models.Model):
    fermeId = models.AutoField(primary_key=True)
    nomFerme = models.CharField(max_length=255, null=False)
    addresseFerme = models.CharField(max_length=255, null=False)
    villeFerme = models.CharField(max_length=255, null=False)
    provinceFerme = models.CharField(max_length=255, null=True)
    deleted = models.BooleanField(null=True)
    deletedDate = models.DateField(null=True)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['nomFerme','addresseFerme','villeFerme'], name='uniqueFerme')
        ]

class Vaches(models.Model):
    vacheId = models.AutoField(primary_key=True)
    nomVache = models.CharField(max_length=255, null=False)
    fermeId = models.ForeignKey("Fermes", on_delete=models.PROTECT)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['nomVache','fermeId'], name='uniqueVacheFerme')
        ]

class Experiences(models.Model):
    experienceId = models.AutoField(primary_key=True)
    nomExperience = models.CharField(max_length=255, null=False)
    dateExperience = models.DateField(auto_now_add=False, null=False)
    categorieId = models.ForeignKey("Categories", on_delete=models.PROTECT, null=False)
    vacheId = models.ForeignKey("Vaches", on_delete=models.PROTECT)

class Notes(models.Model):
    noteId = models.AutoField(primary_key=True)
    dateNote = models.DateField(auto_now_add=False, null=False)
    note = models.CharField(max_length=255, null=False)
    experienceId = models.ForeignKey("Experiences", on_delete=models.PROTECT)

class Medias(models.Model):
    mediaId = models.AutoField(primary_key=True)
    media = models.BinaryField()
    noteId = models.ForeignKey("Notes", on_delete=models.PROTECT)

class Categories(models.Model):
    categorieId = models.AutoField(primary_key=True)
    nomCategorie = models.CharField(max_length=255, null=False, unique=True)

class SousCategories(models.Model):
    sousCategorieId = models.AutoField(primary_key=True)
    nomSousCategorie = models.CharField(max_length=255, null=False)
    categorieId = models.ForeignKey("Categories", on_delete=models.PROTECT, null=False)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['nomSousCategorie','categorieId'], name='uniqueCatSouscat')
        ]

