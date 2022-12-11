import { Component, OnInit } from '@angular/core';
import { Farm, SharedService, UsersFarms } from '../shared.service';

@Component({
  selector: 'app-users-farms-manager',
  templateUrl: './users-farms-manager.component.html',
  styleUrls: ['./users-farms-manager.component.css']
})
export class UsersFarmsManagerComponent implements OnInit {

  usersFarmsList:UsersFarms[]=[];

  allUsersFarmsList:UsersFarms[]=[];

  farmsList:Farm[]=[];

  UsagersList: any = [];
  
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.getUsersFarmsList();
    this.refreshUsagersList();
    this.getFarmsList();
  }

  getUsersFarmsList(){
    this.usersFarmsList=[];

    this.allUsersFarmsList=[];

    this.service.getUsersFarmsList().subscribe(data=> {
      this.allUsersFarmsList=data;
     for (let i = 0; i < this.allUsersFarmsList.length; i++) {
       if(this.allUsersFarmsList[i].fermeId==this.service.editingUserFarm.fermeId){
         this.usersFarmsList.push(this.allUsersFarmsList[i]);
       }
      }
      console.log("Total of associated users "+this.usersFarmsList.length);
    })
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



getFarmsList(){
  this.farmsList=[];

  this.service.getFarmList().subscribe(data=> {
    this.farmsList=data;
   console.log("The valid farm list length is " + this.farmsList.length);

  })
}


  editClick(item: any){
    this.service.editingUserFarm.usagersFermesId=item.usagersFermesId;
    this.service.editingUserFarm.fermeId=item.fermeId;
    this.service.editingUserFarm.usagerId=item.usagerId;


    console.log("Editing user farm Id "+this.service.editingUserFarm.usagersFermesId);
    console.log("Editing user-farm farm Id "+this.service.editingUserFarm.fermeId);
    console.log("Editing user-farm user Id "+this.service.editingUserFarm.usagerId);


  }

  

  deleteClick(item: any){
    if(confirm('Are you sure ? Vous etes sur ?')){
      this.service.deleteUsersFarms(item.usagersFermesId).subscribe(data=>{
        alert(data.toString());
        this.ngOnInit();
      })
    }
  }


  clearPage(){
    this.service.editingUserFarm.usagerId=0;
  }


  convertIdIntoNameUser(Id:number){
    var name="";

    for (let i = 0; i < this.UsagersList.length; i++) {
       if(this.UsagersList[i].usagerId==Id){
        name=this.UsagersList[i].login;
        break;
       }
    }

    return name;
  }

  convertIdIntoNameFarm(Id:number){
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
