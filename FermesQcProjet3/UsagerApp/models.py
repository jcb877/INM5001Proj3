from django.db import models
import hashlib
from django.contrib.auth.hashers import make_password

# Create your models here.

class NiveauAcces(models.Model):
    accesId =  models.AutoField(primary_key=True)
    access = models.CharField(max_length=255,null=False, unique=True)

class Usagers(models.Model):
    usagerId = models.AutoField(primary_key=True)
    mail = models.EmailField(max_length=255, null=False, unique=True)
    prenomUsager = models.CharField(max_length=255,null=False)
    nomUsager = models.CharField(max_length=255,null=False)
    # motPasse = models.TextField(null=False)
    motPasse = models.CharField(max_length=50, null=False)
    # motPasse_md5 = models.CharField(max_length=50, editable=False)
    accesId = models.ForeignKey("NiveauAcces", on_delete=models.CASCADE)

    
    def save(self, *args, **kwargs):
        self.motPasse=hashlib.md5(self.motPasse.encode('utf-8')).hexdigest()
        super().save(*args, **kwargs)
        
    # def save(self, *args, **kwargs):
    #     self.motPasse=make_password(self.motPasse)
    #     super().save(*args, **kwargs)
    

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
    # categorie = models.ForeignKey("Categories", on_delete=models.PROTECT, null=False)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['nomSousCategorie','categorieId'], name='uniqueCatSouscat')
        ]

class Experiences(models.Model):
    experienceId = models.AutoField(primary_key=True)
    nomExperience = models.CharField(max_length=255, null=False)
    dateExperience = models.DateField(auto_now_add=False, null=False)
    categorieId = models.ForeignKey("Categories", on_delete=models.PROTECT, null=False)
    sousCategorieId = models.ForeignKey("SousCategories", on_delete=models.PROTECT, null=False)
    vacheId = models.ForeignKey("Vaches", on_delete=models.PROTECT)