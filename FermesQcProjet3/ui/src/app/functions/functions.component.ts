import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})

export class FunctionsComponent implements OnInit {

  SharedService: SharedService;

  constructor(service: SharedService) {
    this.SharedService = service;
  }

  ngOnInit(): void {


  }

}
