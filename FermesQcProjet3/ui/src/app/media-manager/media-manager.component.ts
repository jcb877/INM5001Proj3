import { Component, OnInit } from '@angular/core';
import { Media, SharedService } from '../shared.service';

@Component({
  selector: 'app-media-manager',
  templateUrl: './media-manager.component.html',
  styleUrls: ['./media-manager.component.css']
})

export class MediaManagerComponent implements OnInit {
  mediasList: Media[] = [];
  allMediasList: Media[] = [];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.getAssociatedMediasList();
  }

  // Obtenir la liste des médias
  getAssociatedMediasList() {
    this.mediasList = [];
    this.allMediasList = [];
    this.service.getMediasList().subscribe(data => {
      this.allMediasList = data;
      for (let i = 0; i < this.allMediasList.length; i++) {
        if (this.allMediasList[i].noteId == this.service.editingNote.noteId) {
          this.mediasList.push(this.allMediasList[i]);
        }
      }
      console.log("All associated media quantity is " + this.mediasList.length);
    })
  }

  // Mise à jour du média
  editClick(item: any) {
    this.service.editingMedia.mediaId = item.mediaId;
    this.service.editingMedia.media = item.media;
    this.service.editingMedia.noteId = item.noteId;
  }

  // Supprimer un média
  deleteClick(item: any) {
    if (confirm('Are you sure? Êtes-vous sûr?')) {
      this.service.deleteMedia(item.mediaId).subscribe(res => {
        if (res.toString().includes("Succes")) {
          alert("Le media est été supprimé. The media is deleted.");
        }
        else {
          alert("Echec à supprimer. Delete has failed.");
        }
        this.ngOnInit();
      })
    }
  }

  // Supprimer les informations entrées dans les champs
  clearPage() {
    this.service.editingMedia.mediaId = 0;
    this.service.editingMedia.media = "";
  }
}
