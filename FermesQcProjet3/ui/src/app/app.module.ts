import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NiveauaccesComponent } from './niveauacces/niveauacces.component';
import { ShowNivaccesComponent } from './niveauacces/show-nivacces/show-nivacces.component';
import { AddEditNivaccesComponent } from './niveauacces/add-edit-nivacces/add-edit-nivacces.component';
import { UsagersComponent } from './usagers/usagers.component';
import { ShowUsgrComponent } from './usagers/show-usgr/show-usgr.component';
import { AddEditUsgrComponent } from './usagers/add-edit-usgr/add-edit-usgr.component';
import { SharedService } from './shared.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FunctionsComponent } from './functions/functions.component';
import { LogoutComponent } from './logout/logout.component';
import { AddComponent } from './niveauacces/add/add.component';
import { FarmsManagerComponent } from './farms-manager/farms-manager.component';
import { CategoriesComponent } from './categories/categories.component';
import { ExperienceComponent } from './experience/experience.component';
import { AddEditFarmComponent } from './farms-manager/add-edit-farm/add-edit-farm.component';
import { AddEditExperienceComponent } from './experience/add-edit-experience/add-edit-experience.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { FarmSelectionComponent } from './farm-selection/farm-selection.component';
import { AddEditCategoryComponent } from './categories/add-edit-category/add-edit-category.component';
import { MatNativeDateModule } from '@angular/material/core';
import { AddEditSubCategoryComponent } from './sub-categories/add-edit-sub-category/add-edit-sub-category.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CowManagerComponent } from './cow-manager/cow-manager.component';
import { AddEditCowComponent } from './cow-manager/add-edit-cow/add-edit-cow.component';
import { DeletedFarmsManagerComponent } from './farms-manager/deleted-farms-manager/deleted-farms-manager.component';
import { NotesManagerComponent } from './notes-manager/notes-manager.component';
import { AddEditNoteComponent } from './notes-manager/add-edit-note/add-edit-note.component';
import { MediaManagerComponent } from './media-manager/media-manager.component';
import { AddEditMediaComponent } from './media-manager/add-edit-media/add-edit-media.component';
import { UsersFarmsManagerComponent } from './users-farms-manager/users-farms-manager.component';
import { AddEditUserFarmComponent } from './users-farms-manager/add-edit-user-farm/add-edit-user-farm.component';
import { AgricultureExperienceGraphicsComponent } from './agriculture-experience-graphics/agriculture-experience-graphics.component';
import { AddEditGraphicsComponent } from './agriculture-experience-graphics/add-edit-graphics/add-edit-graphics.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const appRoutes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'Acceuil', component: CarouselComponent },
  { path: 'Login', component: FunctionsComponent },
  { path: 'Logout', component: LogoutComponent },
  { path: 'Functions', component: FunctionsComponent },
  { path: 'ShowUserList', component: ShowUsgrComponent },
  { path: 'ShowAccessLevelList', component: ShowNivaccesComponent },
  { path: 'AddAccess', component: AddComponent },
  { path: 'AddEditUser', component: AddEditUsgrComponent },
  { path: 'FarmsManager', component: FarmsManagerComponent },
  { path: 'AddEditFarm', component: AddEditFarmComponent },
  { path: 'CategoriesManager', component: CategoriesComponent },
  { path: 'AddEditCategory', component: AddEditCategoryComponent },
  { path: 'SubCategoriesManager', component: SubCategoriesComponent },
  { path: 'AddEditSubCategory', component: AddEditSubCategoryComponent },
  { path: 'ExperienceManager', component: ExperienceComponent },
  { path: 'AddEditExperience', component: AddEditExperienceComponent },
  { path: 'NotesManager', component: NotesManagerComponent },
  { path: 'AddEditNote', component: AddEditNoteComponent },
  { path: 'FarmSelect', component: FarmSelectionComponent },
  { path: 'CowManager', component: CowManagerComponent },
  { path: 'AddEditCow', component: AddEditCowComponent },
  { path: 'DeletedFarmsManager', component: DeletedFarmsManagerComponent },
  { path: 'MediasManager', component: MediaManagerComponent },
  { path: 'AddEditMedia', component: AddEditMediaComponent },
  { path: 'UsersFarmsManager', component: UsersFarmsManagerComponent },
  { path: 'AddEditUserFarm', component: AddEditUserFarmComponent },
  { path: 'agricultureExperienceGraphics', component: AgricultureExperienceGraphicsComponent },
  { path: 'AddEditGraphics', component: AddEditGraphicsComponent },
  { path: '**', component: ErrorComponent }
]

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
    FunctionsComponent,
    LogoutComponent,
    AddComponent,
    FarmsManagerComponent,
    CategoriesComponent,
    ExperienceComponent,
    AddEditFarmComponent,
    AddEditExperienceComponent,
    SubCategoriesComponent,
    FarmSelectionComponent,
    AddEditCategoryComponent,
    AddEditSubCategoryComponent,
    CowManagerComponent,
    AddEditCowComponent,
    DeletedFarmsManagerComponent,
    NotesManagerComponent,
    AddEditNoteComponent,
    MediaManagerComponent,
    AddEditMediaComponent,
    UsersFarmsManagerComponent,
    AddEditUserFarmComponent,
    AgricultureExperienceGraphicsComponent,
    AddEditGraphicsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,

    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }
    ),

    RouterModule.forRoot(appRoutes)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
