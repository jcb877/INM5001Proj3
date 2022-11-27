import { Component, OnInit } from '@angular/core';
import { Cow, Farm, SharedService, User } from '../shared.service';

@Component({
  selector: 'app-farms-manager',
  templateUrl: './farms-manager.component.html',
  styleUrls: ['./farms-manager.component.css']
})
export class FarmsManagerComponent implements OnInit {

  farmsList:Farm[]=[];

  originalFarmsList:Farm[]=[];

 


  constructor(private service:SharedService) { }

  ngOnInit(): void {


    this.getValidFarmsList();
  }


  //only get the not Deleted farm
  getValidFarmsList(){
    this.farmsList=[];

    this.service.getFarmList().subscribe(data=> {
      this.originalFarmsList=data;

      console.log("The original farm list length is " + this.originalFarmsList.length);


      for (let i = 0; i < this.originalFarmsList.length; i++) {
        if(this.originalFarmsList[i].deleted!=true){
         this.farmsList.push(this.originalFarmsList[i]);
        }
     }

     console.log("The valid farm list length is " + this.farmsList.length);

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


  generateCurrentDate(){
    //generate the current date in the format yyyy-MM-dd hh:mm:ss
    var date = new Date();

    var year = date.getFullYear();

    var month = date.getMonth()+1;   //month starts from 0,so every month needs to add 1

    var day = date.getDate();

    var year = date.getFullYear();

    var dateInString=year+"-"+month+"-"+day;

    return dateInString;

  }

  deleteClick(item: any){

    if(confirm('Are you sure ? Vous etes sur ?')){


      var dateInString=this.generateCurrentDate();

      var farmToDelete = {
        fermeId:item.fermeId,
        nomFerme:item.nomFerme,
        addresseFerme:item.addresseFerme,
        villeFerme:item.villeFerme,
        provinceFerme:item.provinceFerme,
        deleted:true,
        deletedDate:dateInString,
      };

      console.log("Farm ID "+item.fermeId);

      this.service.updateFarm(farmToDelete).subscribe(res=>{
         if(res.toString().includes("Succes")){
            alert("La ferme est ete supprime. The farm is deleted.");
         }
         else{
            alert("Echec a supprimer. Delete is failed.");
         }

        this.ngOnInit();
  
      });
    } 
  
  }

      


  checkUsers(item:any){
    this.service.editingUserFarm.fermeId=item.fermeId;
    console.log("Check users list of the farm "+this.service.editingUserFarm.fermeId);
  }

  checkCows(item:any){
    this.service.editingCow.fermeId=item.fermeId;
    console.log("Check cows list of the farm "+this.service.editingUserFarm.fermeId);
  }




}
