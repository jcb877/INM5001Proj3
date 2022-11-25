import { Component, OnInit } from '@angular/core';
import { Access, SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  accesId:string="";
  access:string="";

  showSuccessMsg:boolean=false;
  showFailMsg:boolean=false;
  showForm:boolean=true;
  showUpdateButton:boolean=false;

  constructor(private service:SharedService) {

  }

  ngOnInit(): void {
    this.showForm=true;

    this.accesId="";
    this.access="";

    this.showUpdateButton=false;

    if(this.service.editingAccess.accesId==0){
         console.log("For new access");
         
    }
    else{
         console.log("For update access");
         this.accesId=this.service.editingAccess.accesId.toString();
         this.access=this.service.editingAccess.accessName;
         this.showUpdateButton=true;
    }

  }


  addNewAccess(){
    var val = {accesId:this.accesId,
      access:this.access};

      this.service.addNivAcc(val).subscribe(res=>{

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

  updateAccess(){
    var val = {accesId:this.accesId,
      access:this.access};

    this.service.updateNivAcc(val).subscribe(res=>{

    alert(res.toString());

    if(res.toString().includes("Succes")){
      this.showForm=false;
      this.showSuccessMsg=true;

      this.service.editingAccess={accesId: 0,accessName:""};
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
