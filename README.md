# **INM5001 Proj3**

### **Avant de commencer :**

Assurez-vous d'avoir installé sur votre machine:

1. Node.js
2. Angular
3. Python
4. MySQL

---

## **MySQL**

- Créer une base de données **fermeqc**

---

## **Backend**

### Methode Automatique

### Dans le répertoire FermesQcAPI

- Éditer le fichier **settings.py** en entrant votre nom usager et votre mot de passe de votre session locale de MySQL
```
DATABASES = {  
   'default': {  
      'ENGINE': 'django.db.backends.mysql',  
      'NAME': 'fermesqc',  
      'USER': `'******'`,  
      'PASSWORD': `'*******'`,  
      'HOST': '127.0.0.1',  
      'PORT': '3306',  
   }  
}
```
<!-- --------- Modifier la position de fichier Python.exe-----
   -- Verifier il est ou:
      Typer la commande Where is python dans la fenetre Command.Et Il va montrer,et juste copier la position de dossier sans \ -->

   <!-- --coller la position dans le FermesQCProjet3->FermesQcAPI->labenv->pyvenv.cfg -->

- À partir du repertoire FermesQcProjet3

   -- Executer le fichier batch `startApp.bat`

---

### Methode Manuelle

### Activer l'environnement virtuel python

- À partir de l'intérieur du répertoire ..\FermesQuebecPrj3\
- Si PC: tapez `labenv\Scripts\activate`
- Si Mac: tapez `source labenv\Scripts\activate`

### Dans le répertoire FermesQcAPI

- Éditer le fichier **settings.py** en entrant votre nom usager et votre mot de passe de votre session locale de MySQL
```
DATABASES = {  
   'default': {  
      'ENGINE': 'django.db.backends.mysql',  
      'NAME': 'fermesqc',  
      'USER': `'******'`,  
      'PASSWORD': `'*******'`,  
      'HOST': '127.0.0.1',  
      'PORT': '3306',  
   }  
}
```
<!-- --------- Modifier la position de fichier Python.exe-----
   -- Verifier il est ou:
      Typer la commande Where is python dans la fenetre Command.Et Il va montrer,et juste copier la position de dossier sans \ -->

   <!-- --coller la position dans le FermesQCProjet3->FermesQcAPI->labenv->pyvenv.cfg -->

<!-- ------Supprimer le fichier migrations
   --Generalement,il se trouve FermesQCProjet3->UsagerApp -->

### Ajouter les nouvelles tables

- `python manage.py makemigrations UsagerApp`
- `python manage.py migrate UsagerApp`
- `python manage.py loaddata add_data.json`

### Démarrer le serveur Python

- `python manage.py runserver`

---

## **Frontend**

- À partir de l'intérieur répertoire **ui**
- Ouvrir un command prompt partir l'application
- `ng serve --open`

---
## **Information d'authentification**
**courriel :**  `abc@abc.com`    
**mot de passe :** `Inm5001!`  (chiffre zéro)