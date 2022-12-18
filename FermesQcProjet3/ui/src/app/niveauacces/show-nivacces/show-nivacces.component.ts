import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-nivacces',
  templateUrl: './show-nivacces.component.html',
  styleUrls: ['./show-nivacces.component.css']
})

export class ShowNivaccesComponent implements OnInit {

  constructor(private service: SharedService) {
    this.ModalTitle = "";
  }

  NiveauAccesList: any = [];
  ModalTitle: string;
  nivacces: any;
  ActivateAddEditNivAccComp: boolean = false;

  ngOnInit(): void {
    this.refreshNivAccessList();
    console.log(this.NiveauAccesList);
  }

  // Bouton pour ajouter un niveau d'accès
  addClick() {
    this.nivacces = {
      accesId: 0,
      access: ""
    }
    this.ModalTitle = "Add Niveau Acces";
    this.ActivateAddEditNivAccComp = true;
  }

  // Bouton pour mettre à jour un niveau d'accès
  editClick(item: any) {
    this.service.editingAccess.accesId = item.accesId;
    this.service.editingAccess.accessName = item.access;

    console.log("Editing access id " + this.service.editingAccess.accesId);
    console.log("Editing access name " + this.service.editingAccess.accessName);

  }

  // Bouton pour supprimer un niveau d'accès
  deleteClick(item: any) {
    if (confirm('Are you sure?\nÊtes-vous sûr?')) {
      this.service.deleteNivAcc(item.accesId).subscribe(data => {
        alert(data.toString());
        this.refreshNivAccessList();
      })
    }
  }

  // Supprimer les informations entrées dans les champs
  clearPage() {
    this.service.editingAccess.accesId = 0;
    this.service.editingAccess.accessName = "";
  }

  // Obtenir la liste des niveaux d'accès
  refreshNivAccessList() {
    this.service.getNivAccList().subscribe(data => {
      this.NiveauAccesList = data;
    })
  }
}
