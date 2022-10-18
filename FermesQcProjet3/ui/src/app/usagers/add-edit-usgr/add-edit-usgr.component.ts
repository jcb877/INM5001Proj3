import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-usgr',
  templateUrl: './add-edit-usgr.component.html',
  styleUrls: ['./add-edit-usgr.component.css']
})
export class AddEditUsgrComponent implements OnInit {

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

  @Input() usgr:any;
  usagerId:string;
  login:string;
  prenomUsager:string;
  nomUsager:string;
  motPasse:string;
  accesId:string;
  PhotoFileName:string;
  PhotoFilePath:string;

  NivAccesList:any=[];

  ngOnInit(): void {
    this.loadNivAccesList();
  }


  loadNivAccesList(){
    this.service.getAllNiveauAccessNames().subscribe((data:any)=>{
      this.NivAccesList=data;

      this.usagerId=this.usgr.usagerId;
      this.login=this.usgr.login;
      this.prenomUsager=this.usgr.prenomUsager;
      this.nomUsager=this.usgr.nomUsager;
      this.motPasse=this.usgr.motPasse;
      this.accesId=this.usgr.accesId;
      this.PhotoFileName=this.usgr.PhotoFileName;
      this.PhotoFilePath=this.service.PhotoUrl + this.PhotoFileName;  
    })

  }
  addUsager(){
    var val = {usagerId:this.accesId,
      login:this.login,
      prenomUsager:this.prenomUsager,
      nomUsager:this.nomUsager,
      motPasse:this.motPasse,
      accesId:this.accesId
    };
    this.service.addUsager(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateUsager(){
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

}