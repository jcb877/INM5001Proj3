import { Component, OnInit } from '@angular/core';
import { Farm, SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-graphics',
  templateUrl: './add-edit-graphics.component.html',
  styleUrls: ['./add-edit-graphics.component.css']
})
export class AddEditGraphicsComponent implements OnInit {

  name: string = "";
  date: string = "";

  showSuccessMsg: boolean = false;
  showFailMsg: boolean = false;
  showForm: boolean = true;
  showUpdateButton: boolean = false;

  farmsList: any = [];
  allFarmsList: Farm[] = [];

  constructor(private service: SharedService) { }

  ngOnInit(): void { }

  // Obtention de la liste des fermes
  getFarmsList() {
    this.service.getFarmList().subscribe(data => {
      this.allFarmsList = data;
      for (let i = 0; i < this.allFarmsList.length; i++) {
        if (this.allFarmsList[i].deleted != true) {
          this.farmsList.push(this.allFarmsList[i]);  //liste des fermes non supprimées seulement
        }
      }
    })
  }

  // Modification de la page lorsque l'ajout est correctement effectué. Le formulaire est caché et le message apparait.
  addNew() {
    this.showForm = false;
    this.showSuccessMsg = true;
  }

  // Fermeture de la fenêtre du message de succès
  closeSuccessMsg() {
    this.showSuccessMsg = false;
    this.ngOnInit();
  }

  // Fermeture de la fenêtre du message d'échec
  closeFailMsg() {
    this.showFailMsg = false;
    this.ngOnInit();

  }

}
