import { Component, OnInit } from '@angular/core';
import { Farm, SharedService } from '../shared.service';

@Component({
  selector: 'app-farms-manager',
  templateUrl: './farms-manager.component.html',
  styleUrls: ['./farms-manager.component.css']
})
export class FarmsManagerComponent implements OnInit {

  farmsList:Farm[]=[];

  // fakeFarmsList:Farm[]=[];


  constructor(private service:SharedService) { }

  ngOnInit(): void {
    //this.getFarmsList();

    //fake only for testing
    // if(this.farmsList.length==0){
    //   console.log("Fake list started");
    //   var farm1:Farm={fermeId:1,nomFerme:"test farm 1",addresseFerme:"123 test street",villeFerme:"test city",provinceFerme:"test province"};
    //   var farm2:Farm={fermeId:2,nomFerme:"test farm 2",addresseFerme:"456 test street",villeFerme:"test city",provinceFerme:"test province"};
    //   var farm3:Farm={fermeId:3,nomFerme:"test farm 2",addresseFerme:"789 test street",villeFerme:"test city",provinceFerme:"test province"};

    //   this.fakeFarmsList.push(farm1);
    //   this.fakeFarmsList.push(farm2);
    //   this.fakeFarmsList.push(farm3);

    //   this.farmsList=this.fakeFarmsList;
    //   console.log("length"+this.farmsList.length);
    // }

    this.getFarmsList();
  }


  getFarmsList(){
    this.service.getFarmList().subscribe(data=> {
      this.farmsList=data;
    })
  }




  editClick(item: any){
    this.service.editingFarm.fermeId=item.fermeId;
    this.service.editingFarm.nomFerme=item.nomFerme;
    this.service.editingFarm.addresseFerme=item.addresseFerme;
    this.service.editingFarm.villeFerme=item.villeFerme;
    this.service.editingFarm.provinceFerme=item.provinceFerme;

    console.log("Editing farm id "+this.service.editingFarm.fermeId);
    console.log("Editing farm name "+this.service.editingFarm.nomFerme);

  }

  clearPage(){
    this.service.editingFarm.fermeId=0;
    this.service.editingFarm.nomFerme="";
    this.service.editingFarm.addresseFerme="";
    this.service.editingFarm.villeFerme="";
    this.service.editingFarm.provinceFerme="";
  }

  deleteClick(item: any){
    if(confirm('Are you sure ? Vous etes sur ?')){
      this.service.deleteFarm(item.fermeId).subscribe(data=>{
        alert(data.toString());
        this.ngOnInit();
      })
    }
  }

}
