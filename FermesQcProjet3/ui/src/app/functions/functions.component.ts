import { Component, OnInit, Injectable } from '@angular/core';
import { Farm, SharedService } from '../shared.service';


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
