import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})

export class LogoutComponent implements OnInit {
  sharedService: SharedService;

  constructor(service: SharedService) {
    this.sharedService = service;
  }

  ngOnInit(): void {
    this.logoutButtonClicked();
  }

  // Désactiver toutes les fonctions lorsque l'utilisateur s'est déconnecté sauf login/logout
  logoutButtonClicked() {
    this.sharedService.showLoginButton = true;
    this.sharedService.showLogoutButton = false;
    this.sharedService.loggedOut = true;
    this.sharedService.showAccessManager = false;
    this.sharedService.showUserAccountManager = false;
    this.sharedService.showFarmsManager = false;
    this.sharedService.showCategoriesManager = false;
    this.sharedService.showSubCategoriesManager = false;
    this.sharedService.showGraphsFarmExperimentsLink = false;
    this.sharedService.showExperienceManager = false;
    this.sharedService.showNotesManager = false;
    this.sharedService.showFarmsSelection = false;
    // Remove all info of the logged in account
    this.clearAllInfoOfCurrentUser();
  }

  clearAllInfoOfCurrentUser() {
    //remove all info of the logged in account
    this.sharedService.currentLoggedInUser = { usagerId: 0, mail: "", prenomUsager: "", nomUsager: "", motPasse: "", accesId: 0 };
    this.sharedService.currentLoggedInUserAccess = "";
  }
}
