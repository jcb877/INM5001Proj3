import { Component, OnInit } from '@angular/core';
import { Cow, Farm, SharedService } from '../shared.service';

@Component({
  selector: 'app-cow-manager',
  templateUrl: './cow-manager.component.html',
  styleUrls: ['./cow-manager.component.css']
})
export class CowManagerComponent implements OnInit {

  cowsList:Cow[]=[];

  allCowsList:Cow[]=[];

  farmsList:Farm[]=[];

  farmName:string="";
  
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.getCowsList();
    this.getFarmsList();
  }

  getCowsList(){
    this.cowsList=[];

    this.allCowsList=[];

    this.service.getCowsList().subscribe(data=> {
      this.allCowsList=data;
      for (let i = 0; i < this.allCowsList.length; i++) {
        if(this.allCowsList[i].fermeId==this.service.editingCow.fermeId){
          this.cowsList.push(this.allCowsList[i]);
        }
     }
    })
  }

  getFarmsList(){
    this.service.getFarmList().subscribe(data=> {
      this.farmsList=data;
    })
  }

  

  editClick(item: any){
    this.service.editingCow.vacheId=item.vacheId;
    this.service.editingCow.nomVache=item.nomVache;
    this.service.editingCow.fermeId=item.fermeId;


    console.log("Editing cow id "+this.service.editingCow.vacheId);
    console.log("Editing cow name "+this.service.editingCow.nomVache);
    console.log("Editing farm id "+this.service.editingCow.fermeId);


  }

  

  deleteClick(item: any){
    if(confirm('Are you sure ? Vous etes sur ?')){
      this.service.deleteCow(item.vacheId).subscribe(data=>{
        alert(data.toString());
        this.ngOnInit();
      })
    }
  }


  clearPage(){
    this.service.editingCow.vacheId=0;
    this.service.editingCow.nomVache="";
  }


  convertIdIntoName(Id:number){
    var name="";
    for (let i = 0; i < this.farmsList.length; i++) {
       if(this.farmsList[i].fermeId==Id){
        name=this.farmsList[i].nomFerme;
        break;
       }
    }


    return name;

  }

}
