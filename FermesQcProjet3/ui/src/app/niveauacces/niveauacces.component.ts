import { SharedService, Access } from 'src/app/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-niveauacces',
  templateUrl: './niveauacces.component.html',
  styleUrls: ['./niveauacces.component.css']
})
export class NiveauaccesComponent implements OnInit {

  // accessList:Access[] = [];

  constructor(private service: SharedService) { }

  ngOnInit(): void {

    // if (this.accessList.length == 0) {
    //   console.log("Fake list started");
    //   var a1: Access = { accesId: 1, accessName: "Admin" };
    //   var a2: Access = { accesId: 2, accessName: "Chercheur" };
    //   var a3: Access = { accesId: 3, accessName: "PI" };

    //   this.accessList.push(a1);
    //   this.accessList.push(a2);
    //   this.accessList.push(a3);

    //   console.log("length" + this.accessList.length);
    // }

  }

}
