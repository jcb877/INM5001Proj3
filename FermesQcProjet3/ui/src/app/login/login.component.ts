import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { SharedService, User } from '../shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})





export class LoginComponent implements OnInit {

  //for verification and find user account in db
  userN:string="";
  pw:string="";
  pwRef:string="";


  userFound:boolean=false;  //if the user is found,change the value,default value is usager is not found.

  userAuthenticated:boolean=false;  //if user authenticated correctly,the value will be changed into true.

  loginForm:FormGroup=new FormGroup({
    userName:new FormControl(''),
    password:new FormControl(''),
  });

  allUsers:any=[];

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.service.getUsagerList().subscribe(
      res=>{
      this.allUsers=res;
      console.log("Inside login module,the users list length is ",this.allUsers.length);
    }
  );
  }

  submitForm(){
      this.userN=this.loginForm.value.userName;
      this.pw=this.loginForm.value.password;
      console.log("input values are got");

      //verify if userName existe
      this.getAllUsers();


      if(this.userN===""&&this.pw===""){
        alert("Saisez votre nom d'utilisateur et le mot de passe ! Please input username and password !");
      }
      else{
         //if username and password are input,check if pw is correct
      for(let user of this.allUsers){
        if(user.login===this.userN){
              console.log("This user is found - ",user.login);
              this.userFound=true;  //user is found
              this.pwRef=user.motPasse;  //get password reference

              console.log("Password ",user.motPasse)

              console.log("Access ID ",user.accesId)
              //get the current user information into shared service
              this.service.currentLoggedInUser=user;
        }
      }

      if(!this.userFound){
        alert("Utilisateur n'existe pas ! The user does not exist");
        this.loginForm.value.userName.value='';
      }

      //if user is found,check pw correctness.
      if(this.userFound){

        if(this.pw===this.pwRef){
          //if all is correct,show welcome message.
          alert("Tout est correct.Bienvenue ! All correct.Welcome !");
          //console.log(this.service.currentLoggedInUser.accesId);
          console.log(this.service.currentLoggedInUser.login);
          this.showAllFuncAfterLoginWithSuccess(this.service.currentLoggedInUser.accesId);
        }
        else{
           //if not correct,show error message.
           alert("Erreur,verifiez ce que vous avez entré !  Error,please verify what you input");
           console.log(this.userN);
           console.log(this.pw);
           console.log(this.pwRef);

        }
      }
      }
  }


  showAllFuncAfterLoginWithSuccess(accessId:number){

    //access ID decides which functions will be acquired after logging in.
    console.log("Logged in successfully !");

      switch(accessId) {
        case 19:
          // code block reserved for super admin access
          //all access
           this.service.currentLoggedInUserAccess="superAdmin";

           console.log("Super Admin access !");

           this.service.showLoginButton=false;

           this.service.showLogoutButton=true;

           this.service.showAccessManager=true;

           this.service.showUserAccountManager=true;

           this.service.showFarmsManager=true;

           this.service.showCategoriesManager=true;

           this.service.showSubCategoriesManager=true;

           this.service.showGraphsFarmExperimentsLink=true;

           this.service.showExperienceManager=true;

           this.service.showEventsManager=true;

           this.service.showFarmsSelection=true;

           break;
        case 2:
           // code block reserved for rechercheur access
           this.service.currentLoggedInUserAccess="Chercheur";
           console.log("Chercheur access !");

           this.service.showLoginButton=false;

           this.service.showLogoutButton=true;

           //show only 2 managers
           this.service.showGraphsFarmExperimentsLink=true;

           this.service.showExperienceManager=true;


           break;
        case 3:
           // code block reserved for PI access
           this.service.currentLoggedInUserAccess="PI";
           console.log("PI access !");

           this.service.showLoginButton=false;

           this.service.showLogoutButton=true;

           //show only 2 manangers
           this.service.showEventsManager=true;

           this.service.showFarmsSelection=true;

           break;
        case 1:
           // code block reserved for admin access
           this.service.currentLoggedInUserAccess="Admin";

           console.log("Admin access !");

           this.service.showLoginButton=false;

           this.service.showLogoutButton=true;



           this.service.showAccessManager=true;
           //only 2 manangers
           this.service.showUserAccountManager=true;

           this.service.showFarmsManager=true;

           this.service.showCategoriesManager=true;

           this.service.showSubCategoriesManager=true;

           break;
        default:
           // code block
           console.log("Nothing !");
      }

    }



}
