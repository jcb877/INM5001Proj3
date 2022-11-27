import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-media',
  templateUrl: './add-edit-media.component.html',
  styleUrls: ['./add-edit-media.component.css']
})
export class AddEditMediaComponent implements OnInit {

  mediaId:number=0;
  noteId:number=0;
  media:string="";  



  showSuccessMsg:boolean=false;
  showFailMsg:boolean=false;
  showForm:boolean=true;
  showUpdateButton:boolean=false;


  notesList: any = [];

  constructor(private service:SharedService) {

  }



  ngOnInit(): void {

    if(this.service.editingMedia.mediaId==0){

      this.noteId=this.service.editingNote.noteId;

      console.log("For adding new media for the note No."+this.noteId);
      
    }
    else{
      console.log("For update media");

      this.noteId=this.service.editingMedia.noteId;

      this.media=this.service.editingMedia.media;

      this.mediaId=this.service.editingMedia.mediaId;

      this.showUpdateButton=true;
    }

  }





  addNew(){

    var val = {
      mediaId:this.mediaId,
      media:this.media, 
      noteId:this.noteId, 
    };

    this.service.addMedia(val).subscribe(res=>{
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

  update(){
    var val = {
      mediaId:this.mediaId,
      media:this.media, 
      noteId:this.noteId, 
    };


   console.log("Media id is "+val.mediaId+" Note id is "+val.noteId);
    
    this.service.updateMedia(val).subscribe(res=>{
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
