import { Component, NgModule, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-usgr',
  templateUrl: './show-usgr.component.html',
  styleUrls: ['./show-usgr.component.css']
})
export class ShowUsgrComponent implements OnInit {

  constructor(private service:SharedService) { 
    this.ModalTitle = "";
  }

  UsagersList:any=[];

  ModalTitle:string;
  usgr:any;
  ActivateAddEditUsgrComp:boolean=false;

  ngOnInit(): void {
    this.refreshUsagersList();
  }

  addClick(){
    this.usgr={
      usagerId:0,
      login:"",
      prenomUsager:"",
      nomUsager:"",
      motPasse:"",
      accesId:0
    }
    this.ModalTitle="Add Usager";
    this.ActivateAddEditUsgrComp=true;
  }

  editClick(item: any){
    this.usgr=item;
    this.ModalTitle="Edit Usager";
    this.ActivateAddEditUsgrComp=true;
  }


  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteNivAcc(item.usagerId).subscribe(data=>{
        alert(data.toString());
        this.refreshUsagersList();
      })
    }
  }
  closeClick(){
    this.ActivateAddEditUsgrComp=false;
    this.refreshUsagersList();
  }

  refreshUsagersList(){
    this.service.getUsagerList().subscribe(data=> {
      this.UsagersList=data;
    })
  }
}

