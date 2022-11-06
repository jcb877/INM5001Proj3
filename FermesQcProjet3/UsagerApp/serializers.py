from dataclasses import field
from rest_framework import serializers
from UsagerApp.models import NiveauAcces, Usagers, UsagersFermes, Fermes

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
                'login',
                'fermeId')

class FermesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fermes
        fields = ('fermeId',
                'nomFerme',
                'addresseFerme',
                'villeFerme',
                'provinceFerme')