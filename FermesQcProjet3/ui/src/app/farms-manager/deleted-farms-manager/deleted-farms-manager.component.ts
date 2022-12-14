import { Component, OnInit } from '@angular/core';
import { Farm, SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-deleted-farms-manager',
  templateUrl: './deleted-farms-manager.component.html',
  styleUrls: ['./deleted-farms-manager.component.css']
})

export class DeletedFarmsManagerComponent implements OnInit {
  farmsList: Farm[] = [];
  originalFarmsList: Farm[] = [];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.getDeletedFarmsList();
  }

  // Obtenir la liste des fermes supprimées
  getDeletedFarmsList() {
    this.farmsList = [];

    this.service.getFarmList().subscribe(data => {
      this.originalFarmsList = data;

      console.log("The original farm list length is " + this.originalFarmsList.length);

      for (let i = 0; i < this.originalFarmsList.length; i++) {
        if (this.originalFarmsList[i].deleted == true) {
          this.farmsList.push(this.originalFarmsList[i]);
        }
      }

      console.log("The valid farm list length is " + this.farmsList.length);
    })
  }

  // Fonction permettant d'enlever la ferme de la liste des fermes supprimées
  recoverClick(item: any) {
    if (confirm('Are you sure?\nÊtes-vous sûr?')) {

      var farmToRecover = {
        fermeId: item.fermeId,
        nomFerme: item.nomFerme,
        addresseFerme: item.addresseFerme,
        villeFerme: item.villeFerme,
        provinceFerme: item.provinceFerme,
        deleted: false,
      };

      console.log("Farm ID " + item.fermeId);

      this.service.updateFarm(farmToRecover).subscribe(res => {
        if (res.toString().includes("Succes")) {
          alert("La ferme est été récupérée.\nThe farm is recovered.");
        }
        else {
          alert("Échec à récupérer.\nRecovery has failed.");
        }
        this.ngOnInit();
      })
    }
  }
}
