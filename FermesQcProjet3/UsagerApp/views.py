#from socket import J1939_PGN_ADDRESS_COMMANDED
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from UsagerApp.models import NiveauAcces, Usagers, UsagersFermes, Fermes
from UsagerApp.serializers import NiveauAccesSerializer, UsagersSerializer, UsagersFermesSerializer, FermesSerializer

from django.core.files.storage import default_storage

# Create your views here.
@csrf_exempt
def niveauAccesApi(request, accesId=0):
    if request.method=='GET':
        niveauAcces = NiveauAcces.objects.all()
        niveauAccess_serializer = NiveauAccesSerializer(niveauAcces, many=True)
        return JsonResponse(niveauAccess_serializer.data, safe=False)
    elif request.method=='POST':
        niveauAcces_data = JSONParser().parse(request)
        niveauAcces_serializer = NiveauAccesSerializer(data=niveauAcces_data)
        if niveauAcces_serializer.is_valid():
            niveauAcces_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse("Failes to add", safe=False)
    
    elif request.method=='PUT':
        niveauAcces_data = JSONParser().parse(request)
        niveauAcces=NiveauAcces.objects.get(accesId=niveauAcces_data['accesId'])
        niveauAcces_serializer = NiveauAccesSerializer(niveauAcces, data=niveauAcces_data)
        if niveauAcces_serializer.is_valid():
            niveauAcces_serializer.save()
            return JsonResponse("Updated Succesfully!!", safe=False)
        return JsonResponse("Failed to update",safe=False)
    
    elif request.method=='DELETE':
        niveauAcces=NiveauAcces.objects.get(accesId=id)
        niveauAcces.delete()
        return JsonResponse("Deleted Succesfully!!", safe=False)

@csrf_exempt
def usagersApi(request, usagerId=0):
    if request.method=='GET':
        usagers = Usagers.objects.all()
        usagers_serializer = UsagersSerializer(usagers, many=True)
        return JsonResponse(usagers_serializer.data, safe=False)
    elif request.method=='POST':
        usager_data = JSONParser().parse(request)
        usager_serializer = UsagersSerializer(data=usager_data)
        if usager_serializer.is_valid():
            usager_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse("Failes to add", safe=False)
    
    elif request.method=='PUT':
        usager_data = JSONParser().parse(request)
        usager=Usagers.objects.get(usagerId=usager_data['usagerId'])
        usager_serializer = UsagersSerializer(usager, data=usager_data)
        if usager_serializer.is_valid():
            usager_serializer.save()
            return JsonResponse("Updated Succesfully!!", safe=False)
        return JsonResponse("Failed to update",safe=False)
    
    elif request.method=='DELETE':
        usager=Usagers.objects.get(usagerId=id)
        usager.delete()
        return JsonResponse("Deleted Succesfully!!", safe=False)


@csrf_exempt
def SaveFile(request):
    file=request.FILES['uploadedFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name, safe=False)