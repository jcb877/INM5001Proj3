#from socket import J1939_PGN_ADDRESS_COMMANDED
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from UsagerApp.models import NiveauAcces, Usagers, UsagersFermes, Fermes, Vaches, Experiences, Categories, SousCategories, Notes, Medias
from UsagerApp.serializers import NiveauAccesSerializer, UsagersSerializer, UsagersFermesSerializer, FermesSerializer, VachesSerializer, ExperiencesSerializer, CategoriesSerializer, SousCategoriesSerializer, NotesSerializer, MediasSerializer

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
        return JsonResponse("Failed to add", safe=False)
    
    elif request.method=='PUT':
        niveauAcces_data = JSONParser().parse(request)
        niveauAcces=NiveauAcces.objects.get(accesId=niveauAcces_data['accesId'])
        niveauAcces_serializer = NiveauAccesSerializer(niveauAcces, data=niveauAcces_data)
        if niveauAcces_serializer.is_valid():
            niveauAcces_serializer.save()
            return JsonResponse("Updated Succesfully!!", safe=False)
        return JsonResponse("Failed to update",safe=False)
    
    elif request.method=='DELETE':
        niveauAcces=NiveauAcces.objects.get(accesId=accesId)
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
        return JsonResponse("Failed to add", safe=False)
    elif request.method=='PUT':
        usager_data = JSONParser().parse(request)
        usager=Usagers.objects.get(usagerId=usager_data['usagerId'])
        usager_serializer = UsagersSerializer(usager, data=usager_data)
        if usager_serializer.is_valid():
            usager_serializer.save()
            return JsonResponse("Updated Succesfully!!", safe=False)
        return JsonResponse("Failed to update",safe=False)
    elif request.method=='DELETE':
        usager=Usagers.objects.get(usagerId=usagerId)
        usager.delete()
        return JsonResponse("Deleted Succesfully!!", safe=False)

@csrf_exempt
def UsagersFermesApi(request, usagersFermesId=0):
    if request.method=='GET':
        usagersFermes = UsagersFermes.objects.all()   
        usagersFermes_serializer = UsagersFermesSerializer(usagersFermes, many=True)
        return JsonResponse(usagersFermes_serializer.data, safe=False) 
    elif request.method=='POST':
        usagersFermes_data = JSONParser().parse(request)
        usagersFermes_serializer = UsagersFermesSerializer(data=usagersFermes_data)
        if usagersFermes_serializer.is_valid():
            usagersFermes_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse("Failed to add", safe=False)        
    elif request.method=='PUT':
        usagersFermes_data = JSONParser().parse(request)
        usagersFermes=UsagersFermes.objects.get(usagersFermesId=usagersFermes_data['usagersFermesId'])
        usagersFermes_serializer = UsagersFermesSerializer(usagersFermes, data=usagersFermes_data)
        if usagersFermes_serializer.is_valid():
            usagersFermes_serializer.save()
            return JsonResponse("Updated Succesfully!!", safe=False)
        return JsonResponse("Failed to update",safe=False)        
    elif request.method=='DELETE':
        usagersFermes=UsagersFermes.objects.get(usagersFermesId=usagersFermesId)
        usagersFermes.delete()
        return JsonResponse("Deleted Succesfully!!", safe=False)

@csrf_exempt
def FermesApi(request, fermeId=0):
    if request.method=='GET':
        fermes = Fermes.objects.all()
        fermes_serializer = FermesSerializer(fermes, many=True)
        return JsonResponse(fermes_serializer.data, safe=False)
    elif request.method=='POST':
        ferme_data = JSONParser().parse(request)
        fermes_serializer = FermesSerializer(data=ferme_data)
        if fermes_serializer.is_valid():
            fermes_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse("Failed to add", safe=False)
    elif request.method=='PUT':
        ferme_data = JSONParser().parse(request)
        ferme = Fermes.objects.get(fermeId=ferme_data['fermeId'])
        fermes_serializer = FermesSerializer(ferme, data=ferme_data)
        if fermes_serializer.is_valid():
            fermes_serializer.save()
            return JsonResponse("Updated Succesfully!!", safe=False)
        return JsonResponse("Failed to update",safe=False)        
    elif request.method=='DELETE':
        ferme=Fermes.objects.get(fermeId=fermeId)
        ferme.delete()
        return JsonResponse("Delected Succesfully", safe=False)    

@csrf_exempt
def VachesApi(request, vacheId=0):
    if request.method=='GET':
        vaches = Vaches.objects.all()
        vaches_serializer = VachesSerializer(vaches, many=True)
        return JsonResponse(vaches_serializer.data, safe=False)
    elif request.method=='POST':
        vache_data = JSONParser().parse(request)
        vache_serializer = VachesSerializer(data=vache_data)
        if vache_serializer.is_valid():
            vache_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse("Failed to add", safe=False)        
    elif request.method=='PUT':
        vache_data = JSONParser().parse(request)
        vache = Vaches.objects.get(vacheId=vache_data['vacheId'])
        vache_serializer = VachesSerializer(vache, data=vache_data)
        if vache_serializer.is_valid():
            vache_serializer.save()
            return JsonResponse("Updated Succesfully!!", safe=False)
        return JsonResponse("Failed to update",safe=False)  
    elif request.method=='DELETE':
        vache=Vaches.objects.get(vacheId=vacheId)
        vache.delete()
        return JsonResponse("Delected Succesfully", safe=False)  

@csrf_exempt
def ExperiencesApi(request, experienceId=0):
    if request.method=='GET':
        experiences = Experiences.objects.all()
        experiences_serializer = ExperiencesSerializer(experiences, many=True)
        return JsonResponse(experiences_serializer.data, safe=False)
    elif request.method=='POST':
        experiences_data = JSONParser().parse(request)
        experiences_serializer = ExperiencesSerializer(data=experiences_data)
        if experiences_serializer.is_valid():
            experiences_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse("Failed to add", safe=False)    
    elif request.method=='PUT':
        experiences_data = JSONParser().parse(request)
        experiences = Experiences.objects.get(experienceId=experiences_data['experienceId'])
        experiences_serializer = ExperiencesSerializer(experiences, data=experiences_data)
        if experiences_serializer.is_valid():
            experiences_serializer.save()
            return JsonResponse("Updated Succesfully!!", safe=False)
        return JsonResponse("Failed to update",safe=False)  
    elif request.method=='DELETE':
        experiences=Experiences.objects.get(experienceId=experienceId)
        experiences.delete()
        return JsonResponse("Delected Succesfully", safe=False) 

@csrf_exempt
def CategoriesApi(request, categorieId=0):
    if request.method=='GET':
        categories = Categories.objects.all()
        categories_serializer = CategoriesSerializer(categories, many=True)
        return JsonResponse(categories_serializer.data, safe=False)
    elif request.method=='POST':
        categories_data = JSONParser().parse(request)
        categories_serializer = CategoriesSerializer(data=categories_data)
        if categories_serializer.is_valid():
            categories_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse("Failed to add", safe=False)  
    elif request.method=='PUT':
        categories_data = JSONParser().parse(request)
        categories = Categories.objects.get(categorieId=categories_data['categorieId'])
        categories_serializer = CategoriesSerializer(categories, data=categories_data)
        if categories_serializer.is_valid():
            categories_serializer.save()
            return JsonResponse("Updated Succesfully!!", safe=False)
        return JsonResponse("Failed to update",safe=False)  
    elif request.method=='DELETE':
        categories=Categories.objects.get(categorieId=categorieId)
        categories.delete()
        return JsonResponse("Delected Succesfully", safe=False) 

@csrf_exempt
def SousCategoriesApi(request, sousCategorieId=0):
    if request.method=='GET':
        sousCategories = SousCategories.objects.all()
        sousCategories_serializer = SousCategoriesSerializer(sousCategories, many=True)
        return JsonResponse(sousCategories_serializer.data, safe=False)
    elif request.method=='POST':
        sousCategories_data = JSONParser().parse(request)
        sousCategories_serializer = SousCategoriesSerializer(data=sousCategories_data)
        if sousCategories_serializer.is_valid():
            sousCategories_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse("Failed to add", safe=False)  
    elif request.method=='PUT':
        sousCategories_data = JSONParser().parse(request)
        sousCategories = SousCategories.objects.get(sousCategorieId=sousCategories_data['sousCategorieId'])
        sousCategories_serializer = SousCategoriesSerializer(sousCategories, data=sousCategories_data)
        if sousCategories_serializer.is_valid():
            sousCategories_serializer.save()
            return JsonResponse("Updated Succesfully!!", safe=False)
        return JsonResponse("Failed to update",safe=False)
    elif request.method=='DELETE':
        sousCategories=SousCategories.objects.get(sousCategorieId=sousCategorieId)
        sousCategories.delete()
        return JsonResponse("Delected Succesfully", safe=False) 

@csrf_exempt
def NotesApi(request, noteId=0):
    if request.method=='GET':
        notes = Notes.objects.all()
        notes_serializer = NotesSerializer(notes, many=True)
        return JsonResponse(notes_serializer.data, safe=False)
    elif request.method=='POST':
        notes_data = JSONParser().parse(request)
        notes_serializer = NotesSerializer(data=notes_data)
        if notes_serializer.is_valid():
            notes_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse("Failed to add", safe=False)  
    elif request.method=='PUT':
        notes_data = JSONParser().parse(request)
        notes = Notes.objects.get(noteId=notes_data['noteId'])
        notes_serializer = NotesSerializer(notes, data=notes_data)
        if notes_serializer.is_valid():
            notes_serializer.save()
            return JsonResponse("Updated Succesfully!!", safe=False)
        return JsonResponse("Failed to update",safe=False)
    elif request.method=='DELETE':
        notes=Notes.objects.get(noteId=noteId)
        notes.delete()
        return JsonResponse("Delected Succesfully", safe=False) 

@csrf_exempt
def MediaApi(request, mediaId=0):
    if request.method=='GET':
        medias = Medias.objects.all()
        medias_serializer = MediasSerializer(medias, many=True)
        return JsonResponse(medias_serializer.data, safe=False)
    elif request.method=='POST':
        medias_data = JSONParser().parse(request)
        medias_serializer = MediasSerializer(data=medias_data)
        if medias_serializer.is_valid():
            medias_serializer.save()
            return JsonResponse("Added Successfully!!", safe=False)
        return JsonResponse("Failed to add", safe=False) 
    elif request.method=='PUT':
        medias_data = JSONParser().parse(request)
        medias = Medias.objects.get(mediaId=medias_data['mediaId'])
        medias_serializer = MediasSerializer(medias, data=medias_data)
        if medias_serializer.is_valid():
            medias_serializer.save()
            return JsonResponse("Updated Succesfully!!", safe=False)
        return JsonResponse("Failed to update",safe=False)
    elif request.method=='DELETE':
        medias=Medias.objects.get(mediaId=mediaId)
        medias.delete()
        return JsonResponse("Delected Succesfully", safe=False) 

@csrf_exempt
def SaveFile(request):
    file=request.FILES['uploadedFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name, safe=False)