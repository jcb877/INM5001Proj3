import { Component, OnInit } from '@angular/core';
import { Cow, Farm, SharedService } from '../shared.service';

@Component({
  selector: 'app-cow-manager',
  templateUrl: './cow-manager.component.html',
  styleUrls: ['./cow-manager.component.css']
})

export class CowManagerComponent implements OnInit {
  cowsList: Cow[] = [];
  allCowsList: Cow[] = [];
  farmsList: Farm[] = [];
  allFarmsList: Farm[] = [];
  farmName: string = "";

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.getCowsList();
    this.getFarmsList();
  }

  // Obtenir la liste des vaches
  getCowsList() {
    this.cowsList = [];
    this.allCowsList = [];
    this.service.getCowsList().subscribe(data => {
      this.allCowsList = data;
      for (let i = 0; i < this.allCowsList.length; i++) {
        if (this.allCowsList[i].fermeId == this.service.editingCow.fermeId) {
          this.cowsList.push(this.allCowsList[i]);
        }
      }
    })
  }

  // Obtenir la liste des fermes
  getFarmsList() {
    this.service.getFarmList().subscribe(data => {
      this.allFarmsList = data;
      for (let i = 0; i < this.allFarmsList.length; i++) {
        if (this.allFarmsList[i].deleted != true) {
          this.farmsList.push(this.allFarmsList[i]);  //only not deleted farms in the list
        }
      }
    })
  }

  // Modifier une vache
  editClick(item: any) {
    this.service.editingCow.vacheId = item.vacheId;
    this.service.editingCow.nomVache = item.nomVache;
    this.service.editingCow.fermeId = item.fermeId;
    console.log("Editing cow id " + this.service.editingCow.vacheId);
    console.log("Editing cow name " + this.service.editingCow.nomVache);
    console.log("Editing farm id " + this.service.editingCow.fermeId);
  }

  // Supprimer une vache
  deleteClick(item: any) {
    if (confirm('Are you sure?\nÊtes-vous sûr?')) {
      this.service.deleteCow(item.vacheId).subscribe(data => {
        alert(data.toString());
        this.ngOnInit();
      })
    }
  }

  // Effacer les données
  clearPage() {
    this.service.editingCow.vacheId = 0;
    this.service.editingCow.nomVache = "";
  }

  // Conversion de la clé primaire au nom de la ferme à laquelle la vache appartient
  convertIdIntoName(Id: number) {
    var name = "";
    for (let i = 0; i < this.farmsList.length; i++) {
      if (this.farmsList[i].fermeId == Id) {
        name = this.farmsList[i].nomFerme;
        break;
      }
    }
    return name;
  }
}
