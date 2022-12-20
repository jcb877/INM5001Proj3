REM Batch file permet d'instancier les tables MySql et de partir les API.
@echo on
call .\labenv\Scripts\activate

call python manage.py makemigrations UsagerApp

call python manage.py migrate UsagerApp

call python manage.py loaddata add_data.json

call python manage.py runserver
