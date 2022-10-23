import { map, Observable, pipe } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SharedService } from 'src/app/shared.service';
import { formatCurrency, Location } from '@angular/common';
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

  constructor(private router: Router, private precedent: Location, private http: HttpClient, private service: SharedService) { }

  obj: any;

  authenticate (form: NgForm) {
    if (form.valid) {

      // this.obj = this.http.get("http://127.0.0.1:8000/usagers/").subscribe(
      //   data => this.obj = data
      // )
      // console.log(this.password);


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
