import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-usgr',
  templateUrl: './show-usgr.component.html',
  styleUrls: ['./show-usgr.component.css']
})

export class ShowUsgrComponent implements OnInit {

  constructor(private service: SharedService) {
    this.ModalTitle = "";
  }

  UsagersList: any = [];
  AccessNiveauxList: any = [];

  ModalTitle: string;
  usgr: any;

  ActivateAddEditUsgrComp: boolean = false;

  ngOnInit(): void {
    this.refreshUsagersList();
    this.refreshNivAccessList();
    console.log("the user length is  " + this.UsagersList.length);
    console.log("the access list length is  " + this.AccessNiveauxList.length);

  }

  // Ajout d'un usager
  addClick() {
    this.usgr = {
      usagerId: 0,
      mail: "",
      prenomUsager: "",
      nomUsager: "",
      motPasse: "",
      accesId: 0
    }

    this.ModalTitle = "Add Usager";
    this.ActivateAddEditUsgrComp = true;
  }

  // Modifier un utilisateur
  editClick(item: any) {
    this.service.editingUser = item;
  }

  // Supprimer les informations entrées dans les champs
  clearPage() {
    this.service.editingUser.usagerId = 0;
    this.service.editingUser.mail = "";
    this.service.editingUser.prenomUsager = "";
    this.service.editingUser.nomUsager = "";
    this.service.editingUser.motPasse = "";
    this.service.editingUser.accesId = 0
  }

  // Supprimer un utilisateur
  deleteClick(item: any) {
    if (confirm('Are you sure?\nÊtes-vous sûr?')) {
      this.service.deleteUsager(item.usagerId).subscribe(data => {
        alert(data.toString());
        this.refreshUsagersList();
      })
    }
  }


  closeClick() {
    this.ActivateAddEditUsgrComp = false;
    this.refreshUsagersList();
  }

  // Obtenir la liste des usagers
  refreshUsagersList() {
    this.service.getUsagerList().subscribe(data => {
      this.UsagersList = data;

      console.log("Printing");
      console.log("length is " + this.UsagersList.length)
      for (let user of this.UsagersList) {
        console.log(user.accesId);
        console.log(user.accesId_id);
      }
    })
  }

  // Obtenir la liste des niveaux d'accès
  refreshNivAccessList() {
    this.service.getNivAccList().subscribe(data => {
      this.AccessNiveauxList = data;
    })
  }

  // Convertir la clé primaire en nom d'accès pour l'usager
  convertAccessIDIntoName(input: number) {
    var name = "";

    for (let access of this.AccessNiveauxList) {
      if (access.accesId == input) {
        name = access.access;
      }
    }
    name = name.toUpperCase();
    return name;
  }
}

