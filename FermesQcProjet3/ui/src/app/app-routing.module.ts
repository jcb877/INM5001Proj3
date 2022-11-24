import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsagersComponent } from './usagers/usagers.component';
import { NiveauaccesComponent } from './niveauacces/niveauacces.component';
import { CategoriesComponent } from './categories/categories.component';


const routes: Routes = [
{path:'usagers', component:UsagersComponent},
{path:'niveauacces', component:NiveauaccesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
