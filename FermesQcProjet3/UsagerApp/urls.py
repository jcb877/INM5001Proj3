from os import stat
from xml.dom.minidom import Document
from django.urls import re_path as url 
from UsagerApp import views

from django.conf.urls.static import static
from django.conf import settings


urlpatterns=[
    url(r'^niveauAcces/$',views.niveauAccesApi),
    url(r'^niveauAcces/([0-9]+)$', views.niveauAccesApi),

    url(r'^usagers/$',views.usagersApi),
    url(r'^usagers/([0-9]+)$', views.usagersApi), 

    url(r'^usagersFermes/$', views.UsagersFermesApi),
    url(r'^usagersFermes/([0-9]+)$', views.UsagersFermesApi),

    url(r'^fermes/$', views.FermesApi),
    url(r'^fermes/([0-9]+)$', views.FermesApi),

    url(r'^vaches/$', views.VachesApi),
    url(r'^vaches/([0-9]+)$', views.VachesApi),

    url(r'^experiences/$', views.ExperiencesApi),
    url(r'^experiences/([0-9]+)$', views.ExperiencesApi),   

    url(r'^categories/$', views.CategoriesApi),
    url(r'^categories/([0-9]+)$', views.CategoriesApi),  

    url(r'^sousCategories/$', views.SousCategoriesApi),
    url(r'^sousCategories/([0-9]+)$', views.SousCategoriesApi),

    url(r'^notes/$', views.NotesApi),
    url(r'^notes/([0-9]+)$', views.NotesApi),

    url(r'^medias/$', views.MediaApi),
    url(r'^medias/([0-9]+)$', views.MediaApi),


    url(r'^SaveFile/$',views.SaveFile)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)