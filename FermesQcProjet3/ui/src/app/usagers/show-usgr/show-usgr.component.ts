import { Component, NgModule, OnInit } from '@angular/core';
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

  ModalTitle: string;
  usgr: any;
  ActivateAddEditUsgrComp: boolean = false;

  ngOnInit(): void {
    this.refreshUsagersList();
  }

  addClick() {
    this.usgr = {
      usagerId: 0,
      login: "",
      prenomUsager: "",
      nomUsager: "",
      motPasse: "",
      accesId: 0
    }
    this.ModalTitle = "Add Usager";
    this.ActivateAddEditUsgrComp = true;
  }

  editClick(item: any) {
    // this.usgr=item;
    // this.ModalTitle="Edit Usager";
    // this.ActivateAddEditUsgrComp=true;

    this.service.editingUser = item;
  }

  clearPage(){
    this.service.editingUser.usagerId=0;
    this.service.editingUser.login="";
    this.service.editingUser.prenomUsager="";
    this.service.editingUser.nomUsager="";
    this.service.editingUser.motPasse="";
    this.service.editingUser.accesId=0
  }



  deleteClick(item: any) {
    if (confirm('Are you sure?')) {
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
}

