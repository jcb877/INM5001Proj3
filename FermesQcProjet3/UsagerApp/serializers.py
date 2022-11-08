from dataclasses import field
from rest_framework import serializers
from UsagerApp.models import Categories, SousCategories, Experiences, NiveauAcces, Notes, Usagers, UsagersFermes, Fermes, Vaches, Medias

class NiveauAccesSerializer(serializers.ModelSerializer):
    class Meta:
        model = NiveauAcces
        fields = ('accesId',
                  'access')

class UsagersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usagers
        fields = ('usagerId',
                'login',
                'prenomUsager',
                'nomUsager',
                'motPasse',
                'accesId')

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
                'dateExperience',
                'categorieId',
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
