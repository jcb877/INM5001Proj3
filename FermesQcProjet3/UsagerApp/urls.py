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

    url(r'^SaveFile/$',views.SaveFile)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)