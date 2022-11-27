import { Component, OnInit } from '@angular/core';
import { SharedService, UsersFarms } from '../shared.service';

@Component({
  selector: 'app-users-farms-manager',
  templateUrl: './users-farms-manager.component.html',
  styleUrls: ['./users-farms-manager.component.css']
})
export class UsersFarmsManagerComponent implements OnInit {

  usersFarmsList:UsersFarms[]=[];

  allUsersFarmsList:UsersFarms[]=[];
  
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.getUsersFarmsList();
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


  convertIdIntoName(Id:number){

  }

}
