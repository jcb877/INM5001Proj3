# INM5001Proj3
=======
Avant de commencer
Assurer vous d'avoir d'installer sur votre machine
Node.js
Angular
Python


-------------------  BackEnd ---------------------

Demmarrer les API python


----Activer l'environnement virtuel python
----à partir de l'intérieur du répertoire ..\FermesQuebecPrj3\
(Copier et coller la commande suivante)
labenv\Scripts\activate 

---------Dans le projet (FermesQcAPI) ----------
---------Éditer fichier settings.py -----------
--------- Entrer le nom usager et mot de passe de votre session locale de Mysql-----
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'fermesqc',
        'USER': '******',
        'PASSWORD': '*******',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    }
}

--------- Modifier la position de fichier Python.exe-----
   -- Verifier il est ou:
      Typer la commande Where is python dans la fenetre Command.Et Il va montrer,et juste copier la position de dossier sans \

   --coller la position dans le FermesQCProjet3->FermesQcAPI->labenv->pyvenv.cfg


------Supprimer le fichier migrations
   --Generalement,il se trouve FermesQCProjet3->UsagerApp

------Ajouter les nouvelles tables --------
python manage.py makemigrations UsagerApp
python manage.py migrate UsagerApp
python manage.py loaddata add_data.json


-----------Executer le program ------------
python manage.py runserver

---------------------------------------------------------------


---------------  Front End---------------------------------

--------- À partir de l'intérieur répertoire ui--------------------
--------- ouvrir un command prompt partir l'application -----------
ng serve

-----------------------------------------------------------


