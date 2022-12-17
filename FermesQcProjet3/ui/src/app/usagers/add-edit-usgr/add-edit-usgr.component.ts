import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-usgr',
  templateUrl: './add-edit-usgr.component.html',
  styleUrls: ['./add-edit-usgr.component.css']
})
export class AddEditUsgrComponent implements OnInit {

  usagerId:string;
  mail:string;
  prenomUsager:string;
  nomUsager:string;
  motPasse:string;
  accesId:string;

  //does db support these 2 below????
  // PhotoFileName:string;
  // PhotoFilePath:string;

  UsagersList: any = [];

  showSuccessMsg:boolean=false;
  showFailMsg:boolean=false;
  showForm:boolean=true;
  showUpdateButton:boolean=false;

  constructor(private service:SharedService) {
    this.usagerId="";
    this.mail="";
    this.prenomUsager="";
    this.nomUsager="";
    this.motPasse="";
    this.accesId="";
    // this.PhotoFileName="";
    // this.PhotoFilePath="";
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
      this.refreshUsagersList();
    }
    else{
      console.log("For update user");

      this.usagerId=this.service.editingUser.usagerId.toString();

      this.mail=this.service.editingUser.mail;

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

    })
  }

  refreshUsagersList() {
    this.service.getUsagerList().subscribe(data => {
      this.UsagersList = data;
    })
  }

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

    if(this.checkBeforeAddingNewUser()){
      //username is already existed
      alert("Le nom d'utilisateur existes deja.The user name already exists");
    }
    else{

      this.convertAccesNameIntoAccessId();

    console.log("this is access id "+this.accesId);

    var val = {
      mail:this.mail,
      prenomUsager:this.prenomUsager,
      nomUsager:this.nomUsager,
      motPasse:this.motPasse,
      accesId:this.accesId
    };

    console.log(val.motPasse);


    this.service.addUsager(val).subscribe(res=>{
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


  }


  checkBeforeAddingNewUser(){
    var userFound=false;

    for(let u of this.UsagersList){
      if(u.mail==this.mail){
        userFound=true;
        break;
      }
    }
    return userFound;
  }




  updateUser(){
    var val = {
      usagerId:this.usagerId,
      mail:this.mail,
      prenomUsager:this.prenomUsager,
      nomUsager:this.nomUsager,
      motPasse:this.motPasse,
      accesId:this.accesId
    };
    this.service.updateUsager(val).subscribe(res=>{
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



//event: { target: { files: any[]; }; }
    uploadPhoto(event:any){
      var file=event.target.files[0];
      const formdata:FormData=new FormData();
      formdata.append('uploadedFile',file,file.name);
      console.log("formdata : " + formdata);


      // this.service.UploadPhoto(formdata).subscribe((data:any)=>{
      //   this.PhotoFileName=data.toString();
      //   this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName
      // })
      // console.log("photo file name : " + this.PhotoFileName);
      // console.log("photo file path : " + this.PhotoFilePath);


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
