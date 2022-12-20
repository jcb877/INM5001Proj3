from django.contrib import admin

# Register your models here.
from .models import NiveauAcces, Usagers, UsagersFermes,Fermes,Vaches,Experiences,Notes,Medias, Categories,SousCategories



admin.site.register(NiveauAcces)
admin.site.register(Usagers)
admin.site.register(UsagersFermes)
admin.site.register(Fermes)
admin.site.register(Vaches)
admin.site.register(Notes)
admin.site.register(Medias)
admin.site.register(Experiences)
admin.site.register(Categories)
admin.site.register(SousCategories)

