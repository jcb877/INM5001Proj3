import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-usgr',
  templateUrl: './add-edit-usgr.component.html',
  styleUrls: ['./add-edit-usgr.component.css']
})

export class AddEditUsgrComponent implements OnInit {
  usagerId: string;
  mail: string;
  prenomUsager: string;
  nomUsager: string;
  motPasse: string;
  accesId: string;

  NivAccesList: any = [];
  UsagersList: any = [];

  // Contrôle les sections visibles sur la page web
  showSuccessMsg: boolean = false;
  showFailMsg: boolean = false;
  showForm: boolean = true;
  showUpdateButton: boolean = false;

  constructor(private service: SharedService) {
    this.usagerId = "";
    this.mail = "";
    this.prenomUsager = "";
    this.nomUsager = "";
    this.motPasse = "";
    this.accesId = "";
  }

  ngOnInit(): void {
    this.refreshNivAccessList();
    if (this.service.editingUser.usagerId == 0) {
      console.log("For new user");
      this.refreshUsagersList();
    }
    else {
      console.log("For update user");
      this.usagerId = this.service.editingUser.usagerId.toString();
      this.mail = this.service.editingUser.mail;
      this.prenomUsager = this.service.editingUser.prenomUsager;
      this.nomUsager = this.service.editingUser.nomUsager;
      this.motPasse = this.service.editingUser.motPasse;
      this.accesId = this.service.editingUser.accesId.toString();
      this.convertAccesIdIntoAccessName();
      this.showUpdateButton = true;
    }
  }

  // Obtenir la liste des niveaux d'accès
  refreshNivAccessList() {
    this.service.getNivAccList().subscribe(data => {
      this.NivAccesList = data;
    })
  }

  // Obtenir la liste des usagers
  refreshUsagersList() {
    this.service.getUsagerList().subscribe(data => {
      this.UsagersList = data;
    })
  }

  // Convertir les niveaux d'accès en clé primaire
  convertAccesNameIntoAccessId() {
    for (let access of this.NivAccesList) {
      if (access.access == this.accesId) {
        this.accesId = access.accesId;
        break;
      }
    }
  }

  // Convertir la clé primaire en niveau d'accès
  convertAccesIdIntoAccessName() {
    for (let access of this.NivAccesList) {
      if (access.accesId == this.accesId) {
        this.accesId = access.access;
        break;
      }
    }
  }

  // Ajouter un nouvel utilisateur
  addNewUser() {
    if (this.checkBeforeAddingNewUser()) {
      //username is already existed
      alert("Le nom d'utilisateur existe déjà.\nThe user name already exists");
    }
    else {
      this.convertAccesNameIntoAccessId();
      console.log("this is access id " + this.accesId);
      var val = {
        mail: this.mail,
        prenomUsager: this.prenomUsager,
        nomUsager: this.nomUsager,
        motPasse: this.motPasse,
        accesId: this.accesId
      };
      console.log(val.motPasse);
      this.service.addUsager(val).subscribe(res => {
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
  }

  // Vérification si un utilisateur existe déjà
  checkBeforeAddingNewUser() {
    var userFound = false;
    for (let u of this.UsagersList) {
      if (u.mail == this.mail) {
        userFound = true;
        break;
      }
    }
    return userFound;
  }

  // Mise à jour d'un utilisateur
  updateUser() {
    var val = {
      usagerId: this.usagerId,
      mail: this.mail,
      prenomUsager: this.prenomUsager,
      nomUsager: this.nomUsager,
      motPasse: this.motPasse,
      accesId: this.accesId
    };
    this.service.updateUsager(val).subscribe(res => {
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
