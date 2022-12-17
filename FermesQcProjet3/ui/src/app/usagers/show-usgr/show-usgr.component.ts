import { NiveauaccesComponent } from './../../niveauacces/niveauacces.component';
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


  AccessNiveauxList: any=[];

  ModalTitle: string;
  usgr: any;
  ActivateAddEditUsgrComp: boolean = false;

  ngOnInit(): void {
    this.refreshUsagersList();
    this.refreshNivAccessList();
    console.log("the user length is  "+this.UsagersList.length);
    console.log("the access list length is  "+this.AccessNiveauxList.length);

  }

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

  editClick(item: any) {
    // this.usgr=item;
    // this.ModalTitle="Edit Usager";
    // this.ActivateAddEditUsgrComp=true;

    this.service.editingUser = item;
  }

  clearPage(){
    this.service.editingUser.usagerId=0;
    this.service.editingUser.mail="";
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



  refreshNivAccessList(){
    this.service.getNivAccList().subscribe(data=> {
      this.AccessNiveauxList=data;
    })
  }

  convertAccessIDIntoName(input:number){
    // console.log("the user length is  "+this.UsagersList.length);
    // console.log("the access list length is  "+this.AccessNiveauxList.length);

    var name="";

    for (let access of this.AccessNiveauxList) {
       if(access.accesId==input){
        name=access.access;
       }
    }

    name=name.toUpperCase();

    return name;
  }


}

