from dataclasses import field
from rest_framework import serializers
from UsagerApp.models import Categories, SousCategories, Experiences, NiveauAcces, Notes, Usagers, UsagersFermes, Fermes, Vaches, Medias

"""
Serialization des donées extraites de la BD en JSON 
"""
class NiveauAccesSerializer(serializers.ModelSerializer):
    class Meta:
        model = NiveauAcces
        fields = ('accesId',
                  'access')
        
class UsagersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usagers
        fields = ('usagerId',
                  'mail',
                  'prenomUsager',
                  'nomUsager',
                  'motPasse',
                  'accesId')

# class NiveauAccesSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = NiveauAcces
#         fields = '__all__'

# class UsagersSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Usagers
#         fields = '__all__'
        
class UsagersFermesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsagersFermes
        fields = ('usagersFermesId',
                  'usagerId',
                  'fermeId')

class FermesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fermes
        fields = ('fermeId',
                  'nomFerme',
                  'addresseFerme',
                  'villeFerme',
                  'provinceFerme',
                  'deleted',
                  'deletedDate')

class VachesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vaches
        fields = ('vacheId',
                  'nomVache',
                  'fermeId')


class ExperiencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experiences
        fields = ('experienceId',
                  'nomExperience',
                  'dateExperience',
                  'categorieId',
                  'sousCategorieId',
                  'vacheId')

class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = ('noteId',
                  'dateNote',
                  'note',
                  'experienceId')

class MediasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medias
        fields = ('mediaId',
                  'media',
                  'noteId')

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ('categorieId',
                  'nomCategorie') 

class SousCategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SousCategories
        fields = ('sousCategorieId',
                  'nomSousCategorie',
                  'categorieId')  

# class CategoriesSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Categories
#         fields = '__all__'

# class SousCategoriesSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = SousCategories
#         fields = '__all__'
