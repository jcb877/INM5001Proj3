import { Component, OnInit } from '@angular/core';
import { Experience, Note, SharedService } from '../shared.service';

@Component({
  selector: 'app-notes-manager',
  templateUrl: './notes-manager.component.html',
  styleUrls: ['./notes-manager.component.css']
})

export class NotesManagerComponent implements OnInit {
  allNotesList: Note[] = [];
  notesList: Note[] = [];
  experienceList: Experience[] = [];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.getNotesList();
    this.getExperiencesList();
  }

  // Obtenir la liste des notes
  getNotesList() {
    this.allNotesList = [];
    this.notesList = [];
    this.service.getNotesList().subscribe(data => {
      this.allNotesList = data;
      for (let i = 0; i < this.allNotesList.length; i++) {
        if (this.allNotesList[i].experienceId == this.service.editingExperience.experienceId) {
          this.notesList.push(this.allNotesList[i]);
        }
      }
    })
  }

  // Obtenir la liste des expériences
  getExperiencesList() {
    this.service.getExperiencesList().subscribe(data => {
      this.experienceList = data;
      console.log("List length is " + this.experienceList.length);
    })
  }

  // Obtenir les médias attachés à la note
  checkAllAssociatedMedias(item: any) {
    this.service.editingNote.noteId = item.noteId;
    console.log("Checking associated media for the note id=" + this.service.editingNote.noteId);
  }

  addAssociatedMedia(item: any) {
    //clear media add edit page
    this.clearPageForMedia();
    this.service.editingNote.noteId = item.noteId;
    console.log("Checking associated media for the note id=" + this.service.editingNote.noteId);
  }

  // Mise à jour d'une note
  editClick(item: any) {
    this.service.editingNote.noteId = item.noteId;
    this.service.editingNote.dateNote = item.dateNote;
    this.service.editingNote.note = item.note;
    this.service.editingNote.experienceId = item.experienceId;
    console.log("Editing note id " + this.service.editingNote.noteId);
    console.log("Editing note date " + this.service.editingNote.dateNote);
    console.log("Editing content " + this.service.editingNote.note);
  }

  // Supprimer une note
  deleteClick(item: any) {
    if (confirm('Are you sure?\nÊtes-vous sûr?')) {
      this.service.deleteNote(item.noteId).subscribe(data => {
        alert(data.toString());
        this.ngOnInit();
      })
    }
  }

  // Supprimer les informations entrées dans les champs de la note
  clearPage() {
    this.service.editingNote.noteId = 0;
    this.service.editingNote.dateNote = "";
    this.service.editingNote.note = "";
    this.service.editingNote.experienceId = 0;
  }

  // Supprimer les informations entrées dans les champs du média
  clearPageForMedia() {
    this.service.editingMedia = {
      mediaId: 0,
      media: "",
      noteId: 0
    }
  }

  // Conversion de la clé primaire en nom d'expérience pour laquelle la note est reliés
  convertIdIntoNameExperience(Id: number) {
    var name = "";
    for (let i = 0; i < this.experienceList.length; i++) {
      if (this.experienceList[i].experienceId == Id) {
        name = this.experienceList[i].nomExperience;
        break;
      }
    }
    return name;
  }
}
