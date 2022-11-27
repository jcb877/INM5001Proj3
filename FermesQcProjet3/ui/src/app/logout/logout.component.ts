import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  sharedService:SharedService;


  constructor(service:SharedService) {
      this.sharedService=service;

   }

  ngOnInit(): void {
    this.logoutButtonClicked();
  }


  logoutButtonClicked(){
    //show login part
    this.sharedService.showLoginButton=true;

    //disable logout link
    this.sharedService.showLogoutButton=false;

    //enable loggout flag
    this.sharedService.loggedOut=true;

    //disable managers access
    this.sharedService.showAccessManager=false;

    this.sharedService.showUserAccountManager=false;

    this.sharedService.showFarmsManager=false;

    this.sharedService.showCategoriesManager=false;

    this.sharedService.showSubCategoriesManager=false;

    this.sharedService.showGraphsFarmExperimentsLink=false;

    this.sharedService.showExperienceManager=false;

    this.sharedService.showNotesManager=false;
  
    this.sharedService.showFarmsSelection=false;

    //remove all info of the logged in account
    this.clearAllInfoOfCurrentUser();
  }


  clearAllInfoOfCurrentUser(){
    //remove all info of the logged in account
    this.sharedService.currentLoggedInUser={usagerId:0,login:"",prenomUsager:"",nomUsager:"",motPasse:"",accesId:0};
    this.sharedService.currentLoggedInUserAccess="";

 }

}
