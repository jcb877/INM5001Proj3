import { Component, OnInit } from '@angular/core';
import { Farm, SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cow',
  templateUrl: './add-edit-cow.component.html',
  styleUrls: ['./add-edit-cow.component.css']
})
export class AddEditCowComponent implements OnInit {
  vacheId: number = 0;
  nomVache: string = "";
  fermeId: number = 0;

  // contrôle la page selon un succès ou un échec et si ajout ou modification
  showSuccessMsg: boolean = false;
  showFailMsg: boolean = false;
  showForm: boolean = true;
  showUpdateButton: boolean = false;

  farmsList: any = [];
  allFarmsList: Farm[] = [];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.getFarmsList();

    if (this.service.editingCow.vacheId == 0) {
      this.fermeId = this.service.editingCow.fermeId
      console.log("For new cow");
    }
    else {
      console.log("For update cow");
      this.vacheId = this.service.editingCow.vacheId;
      this.nomVache = this.service.editingCow.nomVache;
      this.fermeId = this.service.editingCow.fermeId;
      this.showUpdateButton = true;
    }
  }

  // Obtention de la liste des fermes
  getFarmsList() {
    this.service.getFarmList().subscribe(data => {
      this.allFarmsList = data;
      for (let i = 0; i < this.allFarmsList.length; i++) {
        if (this.allFarmsList[i].deleted != true) {
          this.farmsList.push(this.allFarmsList[i]);  // liste des fermes non supprimées
        }
      }
    })
  }

  // Ajout d'une nouvelle vache
  addNewCow() {
    var val = {
      nomVache: this.nomVache,
      fermeId: this.fermeId,
    };

    this.service.addCow(val).subscribe(res => {
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

  // Modification d'une vache
  updateCow() {
    var val = {
      vacheId: this.vacheId,
      nomVache: this.nomVache,
      fermeId: this.fermeId,
    };
    this.service.updateCow(val).subscribe(res => {
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


  // Fermeture du message de succès
  closeSuccessMsg() {
    this.showSuccessMsg = false;
    this.ngOnInit();
  }

  // Fermeture du message d'échec
  closeFailMsg() {
    this.showFailMsg = false;
    this.ngOnInit();
  }
}
