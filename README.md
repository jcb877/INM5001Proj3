<<<<<<< HEAD
# INM5001Proj3
# Test de commit SG
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


------Ajouter les nouvelles tables --------
python manage.py makemigrations UsagerApp
python manage.py migrate UsagerApp


-----------Executer le program ------------
python manage.py runserver

---------------------------------------------------------------


---------------  Front End---------------------------------

--------- À partir de l'intérieur répertoire ui--------------------
--------- ouvrir un command prompt partir l'application -----------
ng serve

-----------------------------------------------------------


>>>>>>> frontEnd_modified
