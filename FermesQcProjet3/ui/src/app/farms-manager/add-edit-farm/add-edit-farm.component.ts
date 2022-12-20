import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-farm',
  templateUrl: './add-edit-farm.component.html',
  styleUrls: ['./add-edit-farm.component.css']
})

export class AddEditFarmComponent implements OnInit {
  fermeId: number = 0;
  nomFerme: string = "";
  addresseFerme: string = "";
  villeFerme: string = "";
  provinceFerme: string = "";

  showSuccessMsg: boolean = false;
  showFailMsg: boolean = false;
  showForm: boolean = true;
  showUpdateButton: boolean = false;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    if (this.service.editingFarm.fermeId == 0) {
      console.log("For new farm");
    }
    else {
      console.log("For update farm");
      this.fermeId = this.service.editingFarm.fermeId;
      this.nomFerme = this.service.editingFarm.nomFerme;
      this.addresseFerme = this.service.editingFarm.addresseFerme;
      this.villeFerme = this.service.editingFarm.villeFerme;
      this.provinceFerme = this.service.editingFarm.provinceFerme;

      this.showUpdateButton = true;
    }
  }

  // Ajout d'une nouvelle ferme
  addNewFarm() {
    var val = {
      nomFerme: this.nomFerme,
      addresseFerme: this.addresseFerme,
      villeFerme: this.villeFerme,
      provinceFerme: this.provinceFerme
    };

    this.service.addFarm(val).subscribe(res => {
      alert(res.toString());

      if (res.toString().includes("Success")) {
        this.showForm = false;
        this.showSuccessMsg = true;
      }
      else {
        this.showForm = false;
        this.showFailMsg = true;
      }
    });
  }

  // Mise à jour de la ferme
  updateFarm() {
    var val = {
      fermeId: this.fermeId,
      nomFerme: this.nomFerme,
      addresseFerme: this.addresseFerme,
      villeFerme: this.villeFerme,
      provinceFerme: this.provinceFerme,
    };

    this.service.updateFarm(val).subscribe(res => {
      alert(res.toString());

      if (res.toString().includes("Succes")) {
        this.showForm = false;
        this.showSuccessMsg = true;
      }
      else {
        this.showForm = false;
        this.showFailMsg = true;
      }
    });
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
