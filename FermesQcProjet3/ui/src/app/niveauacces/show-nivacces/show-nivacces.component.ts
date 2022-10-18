import { Component, NgModule, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-nivacces',
  templateUrl: './show-nivacces.component.html',
  styleUrls: ['./show-nivacces.component.css']
})

export class ShowNivaccesComponent implements OnInit {

  constructor(private service:SharedService) { 
    this.ModalTitle = "";
  }

  NiveauAccesList:any=[];

  ModalTitle:string;
  nivacces:any;
  ActivateAddEditNivAccComp:boolean=false;

  ngOnInit(): void {
    this.refreshNivAccessList();
  }

  addClick(){
    this.nivacces={
      accesId:0,
      access:""
    }
    this.ModalTitle="Add Niveau Acces";
    this.ActivateAddEditNivAccComp=true;
  }

  editClick(item: any){
    this.nivacces=item;
    this.ModalTitle="Edit Niveau Acces";
    this.ActivateAddEditNivAccComp=true;
  }


  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteNivAcc(item.accesId).subscribe(data=>{
        alert(data.toString());
        this.refreshNivAccessList();
      })
    }
  }
  closeClick(){
    this.ActivateAddEditNivAccComp=false;
    this.refreshNivAccessList();
  }

  refreshNivAccessList(){
    this.service.getNivAccList().subscribe(data=> {
      this.NiveauAccesList=data;
    })
  }
}
