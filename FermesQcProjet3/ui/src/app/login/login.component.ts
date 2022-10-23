import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username?: string;
  password?: string;
  messageErreur?: string;

  constructor(private router: Router, private precedent: Location) { }

  authenticate (form: NgForm) {
    if (form.valid) {
      this.router.navigateByUrl('home');
    } else {
      this.messageErreur = 'Données invalides';
    }
  }

  retour(){
    this.precedent.back();
  }

  ngOnInit(): void {
  }

}
