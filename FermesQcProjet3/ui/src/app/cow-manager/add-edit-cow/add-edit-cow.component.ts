import { Component, OnInit } from '@angular/core';
import { Farm, SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cow',
  templateUrl: './add-edit-cow.component.html',
  styleUrls: ['./add-edit-cow.component.css']
})
export class AddEditCowComponent implements OnInit {

  vacheId:number=0;
  nomVache:string="";
  fermeId:number=0;


  showSuccessMsg:boolean=false;
  showFailMsg:boolean=false;
  showForm:boolean=true;
  showUpdateButton:boolean=false;


  farmsList: any = [];
  allFarmsList:Farm[]=[];

  constructor(private service:SharedService) {

  }

  ngOnInit(): void {


    this.getFarmsList();

    if(this.service.editingCow.vacheId==0){
      this.fermeId=this.service.editingCow.fermeId
      console.log("For new cow");
    }
    else{
      console.log("For update cow");

      this.vacheId=this.service.editingCow.vacheId;

      this.nomVache=this.service.editingCow.nomVache;

      this.fermeId=this.service.editingCow.fermeId;

      this.showUpdateButton=true;
    }

  }


  getFarmsList(){
    this.service.getFarmList().subscribe(data=> {
      this.allFarmsList=data;
      for (let i = 0; i < this.allFarmsList.length; i++) {
        if(this.allFarmsList[i].deleted!=true){
          this.farmsList.push(this.allFarmsList[i]);  //only not deleted farms in the list
        }
     }
    })
  }


  addNewCow(){

    var val = {
      nomVache:this.nomVache,
      fermeId:this.fermeId,
    };

    //modify this once farm api is done
    this.service.addCow(val).subscribe(res=>{
      alert(res.toString());

      if(res.toString().includes("Success")){
        this.showForm=false;
        this.showSuccessMsg=true;
      }
      else{
        this.showForm=false;
        this.showFailMsg=true;
      }

    });
  }

  updateCow(){
    var val = {
      vacheId:this.vacheId,
      nomVache:this.nomVache,
      fermeId:this.fermeId,
    };
    this.service.updateCow(val).subscribe(res=>{
    alert(res.toString());

    if(res.toString().includes("Succes")){
      this.showForm=false;
      this.showSuccessMsg=true;
    }
    else{
      this.showForm=false;
      this.showFailMsg=true;
    }


    });
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
