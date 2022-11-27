import { Component, OnInit } from '@angular/core';
import { Farm, SharedService } from '../shared.service';

@Component({
  selector: 'app-farm-selection',
  templateUrl: './farm-selection.component.html',
  styleUrls: ['./farm-selection.component.css']
})
export class FarmSelectionComponent implements OnInit {

  farmsList:Farm[]=[];

  nomFerme:string ="";

  showSuccessMsg:boolean=false;
  showFailMsg:boolean=false;
  showForm:boolean=true;


  constructor(private service:SharedService) {

  }


  ngOnInit(): void {

    this.getFarmsList();

  }


  getFarmsList(){
    this.service.getFarmList().subscribe(data=> {
      this.farmsList=data;
    })
  }

  getSelectedFarm(){
    for(let f of this.farmsList){
      if(f.nomFerme==this.nomFerme){
        this.service.currentlySelectedFarm=f;
        break;
      }
    }
  }


  selectFarm(){
    console.log("This is selected farm "+this.nomFerme);

    if(this.nomFerme!=""){
      this.getSelectedFarm();
      this.showForm=false;
      this.showSuccessMsg=true;
    }
    else{
      this.showForm=false;
      this.showFailMsg=true;
    }


  }

  closeSuccessMsg(){
      this.showSuccessMsg=false;
      this.ngOnInit();
  }

  closeFailMsg(){
      this.showFailMsg=false;
      this.ngOnInit();

  }

}
