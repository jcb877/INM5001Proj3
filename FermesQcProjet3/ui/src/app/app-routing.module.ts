import { DepartComponent } from './depart/depart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsagersComponent } from './usagers/usagers.component';
import { NiveauaccesComponent } from './niveauacces/niveauacces.component';


const routes: Routes = [
{path:'usagers', component:UsagersComponent},
{path:'niveauacces', component:NiveauaccesComponent},
{path: 'login', component:LoginComponent},
{path: 'home', component: HomeComponent},
{path: '', component: DepartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
