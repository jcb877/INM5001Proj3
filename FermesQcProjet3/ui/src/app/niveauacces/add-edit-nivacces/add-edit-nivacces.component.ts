import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-nivacces',
  templateUrl: './add-edit-nivacces.component.html',
  styleUrls: ['./add-edit-nivacces.component.css']
})

export class AddEditNivaccesComponent implements OnInit {

  constructor(private service: SharedService) {
    this.accesId = "";
    this.access = "";
  }

  @Input() nivacces: any;
  accesId: string;
  access: string;

  ngOnInit(): void {
    this.accesId = this.nivacces.accesId;
    this.access = this.nivacces.access;
  }

  // Ajouter un niveau d'accès
  addNiveauAcces() {
    var val = {
      accesId: this.accesId,
      access: this.access
    };
    this.service.addNivAcc(val).subscribe(res => {
      alert(res.toString());
    });
  }

  // Mettre à jour un niveau d'accès
  updateNiveauAcces() {
    var val = {
      accesId: this.accesId,
      access: this.access
    };
    this.service.updateNivAcc(val).subscribe(res => {
      alert(res.toString());
    });
  }
}
