import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Md5 } from "ts-md5";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // Champ requis pour la vérification de l'utlisateur dans la base de données
  userN: string = "";
  mail: string = "";
  pw: string = "";
  pwRef: string = "";

  userFound: boolean = false;  // Si l'utilisateur est trouvé, la valeur est changée.
  userAuthenticated: boolean = false;  // Si l'utilisateur est authentifié, la valeur est changée.

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  allUsers: any = [];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  // Obtenir la liste des utilisateurs
  getAllUsers() {
    this.service.getUsagerList().subscribe(
      res => {
        this.allUsers = res;
        console.log("Inside login module,the users list length is ", this.allUsers.length);
      }
    );
  }

  // Vérification si l'utilisateur existe et soumission du formulaire
  submitForm() {
    this.mail = this.loginForm.value.userName;
    this.pw = Md5.hashStr(this.loginForm.value.password);

    // Message d'alerte si les champs ne contiennentt aucune information
    this.getAllUsers();
    if (this.mail === "" && this.pw === "") {
      alert("Saisissez votre courriel et votre mot de passe!\nPlease input email and password!");
    }
    else {
      // Vérifier si l'utilisateur existe ou non
      for (let user of this.allUsers) {
        if (user.mail === this.mail) {
          console.log("This user is found - ", user.mail);
          this.userFound = true;  //user is found
          this.pwRef = user.motPasse;  //get password reference
          console.log("Password ", user.motPasse)
          console.log("Access ID ", user.accesId)
          //get the current user information into shared service
          this.service.currentLoggedInUser = user;
        }
      }
      // Si l'utilisateur n'est pas trouvé, message d'alerte
      if (!this.userFound) {
        alert("L'utilisateur n'existe pas!\nThe user does not exist!");
        this.loginForm.value.userName.value = '';
      }

      // Vérifier le mot de passe si l'utilisateur existe
      if (this.userFound) {
        // Identification réussie
        if (this.pw === this.pwRef) {
          alert("Bienvenue!\nWelcome!");
          console.log(this.service.currentLoggedInUser.mail);
          this.showAllFuncAfterLoginWithSuccess(this.service.currentLoggedInUser.accesId);
        }
        else {
          // Identification incorrecte
          alert("Erreur, vérifiez l'information entrée!\nError, please verify information entered!");
          console.log(this.mail);
          console.log(this.pw);
          console.log(this.pwRef);

        }
      }
    }
  }

  // Gestion des privilèges en fonction du niveau d'accès de l'utilisateur en cours
  showAllFuncAfterLoginWithSuccess(accessId: number) {
    console.log("Logged in successfully !");

    switch (accessId) {
      case 4:
        // code block reserved for super admin access
        //all access
        this.service.currentLoggedInUserAccess = "superAdmin";
        console.log("Super Admin access !");
        this.service.showLoginButton = false;
        this.service.showLogoutButton = true;
        this.service.showAccessManager = true;
        this.service.showUserAccountManager = true;
        this.service.showFarmsManager = true;
        this.service.showCategoriesManager = true;
        this.service.showSubCategoriesManager = true;
        this.service.showGraphsFarmExperimentsLink = true;
        this.service.showExperienceManager = true;
        this.service.showNotesManager = true;
        this.service.showFarmsSelection = true;
        this.service.showCowManager = true;
        break;
      case 2:
        // code block reserved for rechercheur access
        this.service.currentLoggedInUserAccess = "Chercheur";
        console.log("Chercheur access !");
        this.service.showLoginButton = false;
        this.service.showLogoutButton = true;
        //show only 2 managers
        this.service.showGraphsFarmExperimentsLink = true;
        this.service.showExperienceManager = true;
        break;
      case 3:
        // code block reserved for PI access
        this.service.currentLoggedInUserAccess = "PI";
        console.log("PI access !");
        this.service.showLoginButton = false;
        this.service.showLogoutButton = true;
        //show only 2 managers
        this.service.showNotesManager = true;
        this.service.showExperienceManager = true;
        this.service.showFarmsSelection = true;
        break;
      case 1:
        // code block reserved for admin access
        this.service.currentLoggedInUserAccess = "Admin";
        console.log("Admin access !");
        this.service.showLoginButton = false;
        this.service.showLogoutButton = true;
        this.service.showAccessManager = true;
        //only 2 managers
        this.service.showUserAccountManager = true;
        this.service.showFarmsManager = true;
        this.service.showCowManager = true;
        this.service.showCategoriesManager = true;
        this.service.showSubCategoriesManager = true;
        break;
      default:
        // code block
        console.log("Nothing !");
    }
  }
}
