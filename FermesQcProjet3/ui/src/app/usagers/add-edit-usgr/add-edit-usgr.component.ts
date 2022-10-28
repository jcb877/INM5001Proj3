import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-usgr',
  templateUrl: './add-edit-usgr.component.html',
  styleUrls: ['./add-edit-usgr.component.css']
})
export class AddEditUsgrComponent implements OnInit {

  usagerId:string;
  login:string;   //this is username
  prenomUsager:string;
  nomUsager:string;
  motPasse:string;
  accesId:string;
  
  //does db support these 2 below????
  PhotoFileName:string;
  PhotoFilePath:string;


  showSuccessMsg:boolean=false;
  showFailMsg:boolean=false;
  showForm:boolean=true;
  showUpdateButton:boolean=false;
  
  constructor(private service:SharedService) {
    this.usagerId="";
    this.login="";
    this.prenomUsager="";
    this.nomUsager="";
    this.motPasse="";
    this.accesId="";
    this.PhotoFileName="";
    this.PhotoFilePath="";
  }

  // @Input() usgr:any;
  // usagerId:string;
  // login:string;
  // prenomUsager:string;
  // nomUsager:string;
  // motPasse:string;
  // accesId:string;
  // PhotoFileName:string;
  // PhotoFilePath:string;

  NivAccesList:any=[];

  ngOnInit(): void {
    //this.loadNivAccesList();

    this.refreshNivAccessList();

    if(this.service.editingUser.usagerId==0){
      console.log("For new user");
    }
    else{
      console.log("For update user");

      this.usagerId=this.service.editingUser.usagerId.toString();

      this.login=this.service.editingUser.login;

      this.prenomUsager=this.service.editingUser.prenomUsager;

      this.nomUsager=this.service.editingUser.nomUsager;

      this.motPasse=this.service.editingUser.motPasse;

      this.accesId=this.service.editingUser.accesId.toString();

      this.convertAccesIdIntoAccessName();

      this.showUpdateButton=true;
    }
  }


  refreshNivAccessList(){
    this.service.getNivAccList().subscribe(data=> {
      this.NivAccesList=data;

      // console.log("Printing length: " + this.NivAccesList.length);

      // for(let access of this.NivAccesList){
      //       console.log(access.accesId);
      //       console.log(access.access);
      // }


    })


  }

  // loadNivAccesList(){
  //   this.service.getAllNiveauAccessNames().subscribe((data:any)=>{
  //     this.NivAccesList=data;

  //     this.usagerId=this.usgr.usagerId;
  //     this.login=this.usgr.login;
  //     this.prenomUsager=this.usgr.prenomUsager;
  //     this.nomUsager=this.usgr.nomUsager;
  //     this.motPasse=this.usgr.motPasse;
  //     this.accesId=this.usgr.accesId;
  //     this.PhotoFileName=this.usgr.PhotoFileName;
  //     this.PhotoFilePath=this.service.PhotoUrl + this.PhotoFileName;  
  //   })

  // }

  convertAccesNameIntoAccessId(){
    for(let access of this.NivAccesList){
      if(access.access==this.accesId){
        this.accesId=access.accesId;
        break;
      }
    }
  }

  convertAccesIdIntoAccessName(){
    for(let access of this.NivAccesList){
      if(access.accesId==this.accesId){
        this.accesId=access.access;
        break;
      }
    }
  }

  addNewUser(){
    this.convertAccesNameIntoAccessId();

    console.log("this is access id "+this.accesId);

    var val = {
      login:this.login,
      prenomUsager:this.prenomUsager,
      nomUsager:this.nomUsager,
      motPasse:this.motPasse,
      accesId:this.accesId
    };

    this.service.addUsager(val).subscribe(res=>{
      alert(res.toString());

      if(res.toString().includes("Success")){
        this.showForm=false;
        this.showSuccessMsg=true;
      }

    });
  }

  updateUser(){
    var val = {usagerId:this.usagerId,
      login:this.login,
      prenomUsager:this.prenomUsager,
      nomUsager:this.nomUsager,
      motPasse:this.motPasse,
      accesId:this.accesId
    };
    this.service.updateUsager(val).subscribe(res=>{
    alert(res.toString());
    });
  }



//event: { target: { files: any[]; }; }
    uploadPhoto(event:any){
      var file=event.target.files[0];
      const formdata:FormData=new FormData();
      formdata.append('uploadedFile',file,file.name);

      this.service.UploadPhoto(formdata).subscribe((data:any)=>{
        this.PhotoFileName=data.toString();
        this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName
      })
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