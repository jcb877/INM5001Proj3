import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-note',
  templateUrl: './add-edit-note.component.html',
  styleUrls: ['./add-edit-note.component.css']
})

export class AddEditNoteComponent implements OnInit {
  noteId: number = 0;
  dateNote: string = "";
  note: string = "";
  experienceId: number = 0;

  showSuccessMsg: boolean = false;
  showFailMsg: boolean = false;
  showForm: boolean = true;
  showUpdateButton: boolean = false;
  experiencesList: any = [];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.getExperiencesList();
    if (this.service.editingNote.noteId == 0) {
      console.log("For new note");
      this.experienceId = this.service.editingExperience.experienceId;
    }
    else {
      console.log("For update note");
      this.noteId = this.service.editingNote.noteId;
      this.dateNote = this.service.editingNote.dateNote;
      this.note = this.service.editingNote.note;
      this.experienceId = this.service.editingNote.experienceId;
      this.showUpdateButton = true;
    }
  }

  // Obtenir la liste des expériences
  getExperiencesList() {
    this.service.getExperiencesList().subscribe(data => {
      this.experiencesList = data;
    })
  }

  // Ajouter une nouvelle note
  addNew() {
    var val = {
      noteId: this.noteId,
      dateNote: this.dateNote,
      note: this.note,
      experienceId: this.experienceId
    };
    this.service.addNote(val).subscribe(res => {
      alert(res.toString());
      if (res.toString().includes("Success")) {
        this.showForm = false;
        this.showSuccessMsg = true;
      }
      else {
        this.showForm = false;
        this.showFailMsg = true;
      }
    });
  }

  // Mise à jour de la note
  update() {
    var val = {
      noteId: this.noteId,
      dateNote: this.dateNote,
      note: this.note,
      experienceId: this.experienceId
    };
    console.log("Note id is " + val.noteId + " date is " + val.dateNote);
    this.service.updateNote(val).subscribe(res => {
      alert(res.toString());
      if (res.toString().includes("Succes")) {
        this.showForm = false;
        this.showSuccessMsg = true;
      }
      else {
        this.showForm = false;
        this.showFailMsg = true;
      }
    });
  }

  // Fermer la fenêtre du message de succès
  closeSuccessMsg() {
    this.showSuccessMsg = false;
    this.ngOnInit();
  }

  // Fermer la fenêtre du message d'erreur
  closeFailMsg() {
    this.showFailMsg = false;
    this.ngOnInit();
  }
}
