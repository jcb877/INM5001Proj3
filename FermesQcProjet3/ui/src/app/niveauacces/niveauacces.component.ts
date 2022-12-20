import { SharedService, Access } from 'src/app/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-niveauacces',
  templateUrl: './niveauacces.component.html',
  styleUrls: ['./niveauacces.component.css']
})
export class NiveauaccesComponent implements OnInit {

  constructor(private service: SharedService) { }

  ngOnInit(): void { }

}
