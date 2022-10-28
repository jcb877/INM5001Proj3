import { Component, OnInit } from '@angular/core';
import { Farm, SharedService } from '../shared.service';

@Component({
  selector: 'app-farm-selection',
  templateUrl: './farm-selection.component.html',
  styleUrls: ['./farm-selection.component.css']
})
export class FarmSelectionComponent implements OnInit {

  farmsList:Farm[]=[];

  fakeFarmsList:Farm[]=[];

  nomFerme:string ="";

  showSuccessMsg:boolean=false;
  showFailMsg:boolean=false;
  showForm:boolean=true;

  
  constructor(private service:SharedService) {
  
  }


  ngOnInit(): void {

    this.getFarmsList();

    //fake only for testing
    if(this.farmsList.length==0){
      console.log("Fake list started");
      var farm1:Farm={fermeId:1,nomFerme:"Test Farm 1",addresseFerme:"123 test street",villeFerme:"test city",provinceFerme:"test province"};
      var farm2:Farm={fermeId:2,nomFerme:"Test Farm 2",addresseFerme:"456 test street",villeFerme:"test city",provinceFerme:"test province"};
      var farm3:Farm={fermeId:3,nomFerme:"Test Farm 3",addresseFerme:"789 test street",villeFerme:"test city",provinceFerme:"test province"};
      
      this.fakeFarmsList.push(farm1);
      this.fakeFarmsList.push(farm2);
      this.fakeFarmsList.push(farm3);

      this.farmsList=this.fakeFarmsList;
      console.log("length"+this.farmsList.length);
    }

  }


  getFarmsList(){
    // this.service.getNivAccList().subscribe(data=> {
    //   this.NivAccesList=data;



    // })
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
