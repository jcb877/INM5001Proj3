import { Component, OnInit } from '@angular/core';
import { Farm, SharedService } from '../shared.service';

@Component({
  selector: 'app-farm-selection',
  templateUrl: './farm-selection.component.html',
  styleUrls: ['./farm-selection.component.css']
})

export class FarmSelectionComponent implements OnInit {
  allFarmsList: Farm[] = [];
  farmsList: Farm[] = [];
  farmIdsList: number[] = [];
  nomFerme: string = "";

  showSuccessMsg: boolean = false;
  showFailMsg: boolean = false;
  showForm: boolean = true;

  constructor(private service: SharedService) { }


  ngOnInit(): void {

    if (this.verifyUserAccess()) {
      // Pour accès PI
      this.getUserInvolvedFarmsList();
    }
    else {
      // Pas pour accès PI
      console.log("NOT PI level");
      this.getFarmsList();
    }
  }

  // Obtenir la liste des fermes
  getFarmsList() {
    this.farmsList = [];

    this.service.getFarmList().subscribe(data => {
      this.farmsList = data;
    })
  }

  // Obtenir la liste des fermes associées avec un utilisateur
  getUserInvolvedFarmsList() {
    this.allFarmsList = [];
    this.farmsList = [];
    this.getUserInvolvedFarmsIdsList();

    this.service.getFarmList().subscribe(data => {
      this.allFarmsList = data;
      console.log("Get farm list");
      console.log("Get all farms list length is " + this.allFarmsList.length);
      console.log("Get farm id list length is " + this.farmIdsList.length);

      for (let i = 0; i < this.farmIdsList.length; i++) {
        console.log(" Id is " + this.farmIdsList[i]);

        for (let j = 0; j < this.allFarmsList.length; j++) {
          if (this.allFarmsList[j].fermeId == this.farmIdsList[i]) {
            this.farmsList.push(this.allFarmsList[j]);
            break;
          }
          console.log("farm Id is " + this.allFarmsList[j].fermeId);
        }
      }
      console.log("Involved farm list length is " + this.farmsList.length);
    })
  }

  // Vérifier si l'utilisateur est un PI
  verifyUserAccess() {
    var isPI = false;
    if (this.service.currentLoggedInUser.accesId == 3) {
      console.log("PI level,It should filter available farms first");
      isPI = true;
    }
    return isPI;
  }

  getUserInvolvedFarmsIdsList() {
    var allUsersFarmsList = [];
    this.farmsList = [];
    this.service.getUsersFarmsList().subscribe(data => {
      allUsersFarmsList = data;

      //get farm Ids
      for (let i = 0; i < allUsersFarmsList.length; i++) {
        if (allUsersFarmsList[i].usagerId == this.service.currentLoggedInUser.usagerId) {
          this.farmIdsList.push(allUsersFarmsList[i].fermeId);
        }
      }
      console.log("Total of associated farms " + this.farmIdsList.length);
    });

    console.log("Get id list");
  }

  // Obtenir la liste des fermes sélectionnées
  getSelectedFarm() {
    for (let f of this.farmsList) {
      if (f.nomFerme == this.nomFerme) {
        this.service.currentlySelectedFarm = f;
        break;
      }
    }
  }


  selectFarm() {
    console.log("This is selected farm " + this.nomFerme);

    if (this.nomFerme != "") {
      this.getSelectedFarm();
      this.showForm = false;
      this.showSuccessMsg = true;
    }
    else {
      this.showForm = false;
      this.showFailMsg = true;
    }


  }
  // Fermer la fenêtre du message de succès
  closeSuccessMsg() {
    this.showSuccessMsg = false;
    this.ngOnInit();
  }

  // Fermer la fenêtre du message d'erreur
  closeFailMsg() {
    this.showFailMsg = false;
    this.ngOnInit();

  }

}
