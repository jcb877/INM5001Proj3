import { Component, OnInit } from '@angular/core';
import { Media, SharedService } from '../shared.service';

@Component({
  selector: 'app-media-manager',
  templateUrl: './media-manager.component.html',
  styleUrls: ['./media-manager.component.css']
})
export class MediaManagerComponent implements OnInit {

  mediasList:Media[]=[];

  allMediasList:Media[]=[];
  
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.getAssociatedMediasList();
  }

  getAssociatedMediasList(){
    this.mediasList=[];
    this.allMediasList=[];
    this.service.getMediasList().subscribe(data=> {
      this.allMediasList=data;
      
      for (let i = 0; i < this.allMediasList.length; i++) {
        if(this.allMediasList[i].noteId==this.service.editingNote.noteId){
         this.mediasList.push(this.allMediasList[i]);
        }
     }

     console.log("All associated media quantity is "+this.mediasList.length);


    })
  }

  
  

  

  editClick(item: any){
    this.service.editingMedia.mediaId=item.mediaId;
    this.service.editingMedia.media=item.media;
    this.service.editingMedia.noteId=item.noteId;

  }

  

  deleteClick(item: any){
    if(confirm('Are you sure ? Vous etes sur ?')){
      this.service.deleteMedia(item.mediaId).subscribe(res=>{
        
      if(res.toString().includes("Succes")){
          alert("Le media est ete supprime. The media is deleted.");
       }
      else{
          alert("Echec a supprimer. Delete is failed.");
       }

      this.ngOnInit();


      })
    }
  }


  clearPage(){
    this.service.editingMedia.mediaId=0;
    this.service.editingMedia.media="";
    
  }


  convertIdIntoName(Id:number){

  }


}
