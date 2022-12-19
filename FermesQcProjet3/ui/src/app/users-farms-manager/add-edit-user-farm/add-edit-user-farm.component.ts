import { Component, OnInit } from '@angular/core';
import { Farm, SharedService, User } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-user-farm',
  templateUrl: './add-edit-user-farm.component.html',
  styleUrls: ['./add-edit-user-farm.component.css']
})

export class AddEditUserFarmComponent implements OnInit {
  usagersFermesId: number = 0;
  usagerId: number = 0;
  fermeId: number = 0;

  // Contrôle l'affichage de la page web
  showSuccessMsg: boolean = false;
  showFailMsg: boolean = false;
  showForm: boolean = true;
  showUpdateButton: boolean = false;

  usersList: User[] = [];
  farmsList: Farm[] = [];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.getUsersList();
    this.getFarmsList();

    if (this.service.editingUserFarm.usagerId == 0) {
      this.fermeId = this.service.editingUserFarm.fermeId
      console.log("For adding new farm user pair for the farm No." + this.fermeId);
    }
    else {
      console.log("For update farm user pair");
      this.usagersFermesId = this.service.editingUserFarm.usagersFermesId;
      this.usagerId = this.service.editingUserFarm.usagerId;
      this.fermeId = this.service.editingUserFarm.fermeId;
      this.showUpdateButton = true;
    }
  }

  // Obtenir la liste des usagers
  getUsersList() {
    this.service.getUsagerList().subscribe(data => {
      this.usersList = data;
    })
  }

  // Obtenir la liste des fermes
  getFarmsList() {
    this.service.getFarmList().subscribe(data => {
      this.farmsList = data;
    })
  }

  // Ajouter un nouveau lien usager-ferme
  addNew() {
    var val = {
      usagerId: this.usagerId,
      fermeId: this.fermeId
    };

    this.service.addUsersFarms(val).subscribe(res => {
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

  // Mettre à jour le lien usager-ferme
  update() {
    var val = {
      usagersFermesId: this.usagersFermesId,
      usagerId: this.usagerId,
      fermeId: this.fermeId,
    };

    this.service.updateUsersFarms(val).subscribe(res => {
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
