import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NiveauaccesComponent } from './niveauacces/niveauacces.component';
import { ShowNivaccesComponent } from './niveauacces/show-nivacces/show-nivacces.component';
import { AddEditNivaccesComponent } from './niveauacces/add-edit-nivacces/add-edit-nivacces.component';
import { UsagersComponent } from './usagers/usagers.component';
import { ShowUsgrComponent } from './usagers/show-usgr/show-usgr.component';
import { AddEditUsgrComponent } from './usagers/add-edit-usgr/add-edit-usgr.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NiveauaccesComponent,
    ShowNivaccesComponent,
    AddEditNivaccesComponent,
    UsagersComponent,
    ShowUsgrComponent,
    AddEditUsgrComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
