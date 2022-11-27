import { Component, OnInit } from '@angular/core';
import { Note, SharedService } from '../shared.service';

@Component({
  selector: 'app-notes-manager',
  templateUrl: './notes-manager.component.html',
  styleUrls: ['./notes-manager.component.css']
})
export class NotesManagerComponent implements OnInit {

  notesList:Note[]=[];

  
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.getNotesList();
  }

  getNotesList(){
    this.service.getNotesList().subscribe(data=> {
      this.notesList=data;
    })
  }

  
  

  

  
  //for media operation of the selected note

  checkAllAssociatedMedias(item: any){
    this.service.editingNote.noteId=item.noteId;

    console.log("Checking associated media for the note id="+this.service.editingNote.noteId);

  }

  addAssociatedMedia(item:any){

    //clear media add edit page
    this.clearPageForMedia();

    this.service.editingNote.noteId=item.noteId;

    console.log("Checking associated media for the note id="+this.service.editingNote.noteId);

  }


  //operations for th enote
  editClick(item: any){
    this.service.editingNote.noteId=item.noteId;
    this.service.editingNote.dateNote=item.dateNote;
    this.service.editingNote.note=item.note;
    this.service.editingNote.experienceId=item.experienceId;


    console.log("Editing note id "+this.service.editingNote.noteId);
    console.log("Editing note date "+this.service.editingNote.dateNote);
    console.log("Editing content "+this.service.editingNote.note);

  }



  deleteClick(item: any){
    if(confirm('Are you sure ? Vous etes sur ?')){
      this.service.deleteNote(item.noteId).subscribe(data=>{
        alert(data.toString());
        this.ngOnInit();
      })
    }
  }


  clearPage(){
    this.service.editingNote.noteId=0;
    this.service.editingNote.dateNote="";
    this.service.editingNote.note="";
    this.service.editingNote.experienceId=0;
  }

  
  clearPageForMedia(){
    this.service.editingMedia={
      mediaId: 0,
      media:"",
      noteId: 0
    }
  
  }


  convertIdIntoName(Id:number){

  }


}
