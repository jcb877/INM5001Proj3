from django.db import models
import hashlib
from django.contrib.auth.hashers import make_password

# Create your models here.

"""
Table NiveauAcces : Les niveau accès qu'un usagers peut avoir pour accéder au système .
"""
class NiveauAcces(models.Model):
    accesId =  models.AutoField(primary_key=True)
    access = models.CharField(max_length=255,null=False, unique=True)


"""
Table Usages : les informations des usagers qui ont accès au système.
"""
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
    
"""
Table UsagesFermes : permet de garder les Usages qui ont accès à une ferme.
Contrainte : Un usagers ne peut pas être enregistrer plus qu'un fois à une même ferme.
"""
class UsagersFermes(models.Model):
    usagersFermesId =  models.AutoField(primary_key=True)
    usagerId = models.ForeignKey("Usagers", on_delete=models.CASCADE)
    fermeId = models.ForeignKey("Fermes", on_delete=models.PROTECT)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['usagerId','fermeId'], name='uniqueUsagerFerme')
        ]

"""
Table Fermes : Informations sur les fermes qui détiennent les vaches .
Contrainte : Une ferme ne peut pas être enregistrer 2 fois.
"""
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

"""
Table Vaches : Informations sur les vaches et la ferme qu'elle est attaché.
Contrainte : une vache ne peut pas apartenir à la même ferme 2 fois.
"""
class Vaches(models.Model):
    vacheId = models.AutoField(primary_key=True)
    nomVache = models.CharField(max_length=255, null=False)
    fermeId = models.ForeignKey("Fermes", on_delete=models.PROTECT)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['nomVache','fermeId'], name='uniqueVacheFerme')
        ]


    
"""
Table Notes : les notes contiennent des informations supplémentaires et sont attachés à une expérience.
"""
class Notes(models.Model):
    noteId = models.AutoField(primary_key=True)
    dateNote = models.DateField(auto_now_add=False, null=False)
    note = models.CharField(max_length=255, null=False)
    experienceId = models.ForeignKey("Experiences", on_delete=models.PROTECT)

"""
Table Medias : les medias detiennent les photos ou vidéos des vaches et sont attaché à une note.
"""
class Medias(models.Model):
    mediaId = models.AutoField(primary_key=True)
    media = models.BinaryField()
    noteId = models.ForeignKey("Notes", on_delete=models.PROTECT)

"""
Table Categories : les categories permettent aux chercheurs de les ajouters au experiences.
"""
class Categories(models.Model):
    categorieId = models.AutoField(primary_key=True)
    nomCategorie = models.CharField(max_length=255, null=False, unique=True)

"""
Table Sous Categorie : Permet d'ajouter un autre sous niveau de sous catégorie à la catégorie.
Contrainte: Une catégorie ne peut pas être liée à une même sous categorie plus qu'une fois.
"""
class SousCategories(models.Model):
    sousCategorieId = models.AutoField(primary_key=True)
    nomSousCategorie = models.CharField(max_length=255, null=False)
    categorieId = models.ForeignKey("Categories", on_delete=models.PROTECT, null=False)
    # categorie = models.ForeignKey("Categories", on_delete=models.PROTECT, null=False)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['nomSousCategorie','categorieId'], name='uniqueCatSouscat')
        ]

"""
Table Experience : Permet d'enregistrer les expériences qu'on fait aux vaches. Cette table fait 
les liens entre les catégories, sous categorie et les vaches.
"""
class Experiences(models.Model):
    experienceId = models.AutoField(primary_key=True)
    nomExperience = models.CharField(max_length=255, null=False)
    dateExperience = models.DateField(auto_now_add=False, null=False)
    categorieId = models.ForeignKey("Categories", on_delete=models.PROTECT, null=False)
    sousCategorieId = models.ForeignKey("SousCategories", on_delete=models.PROTECT, null=False)
    vacheId = models.ForeignKey("Vaches", on_delete=models.PROTECT)