import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export interface User {
  usagerId: number;
  login: string;   //this is username
  prenomUsager: string;
  nomUsager: string;
  motPasse: string;
  accesId: number;
}

export interface Access {
  accesId: number;
  accessName: string;
}

export interface Farm {
  fermeId: number;
  nomFerme: string;
  addresseFerme: string;
  villeFerme: string;
  provinceFerme: string;
  deleted:boolean;
  deletedDate:string
}

export interface Cow {
   vacheId:number;
   nomVache: string;
   fermeId: number;
}

export interface UsersFarms {
  usagersFermesId: number;
  fermeId:number;
  usagerId:number;
}


export interface Experience {
  experienceId: number;
  nomExperience: string;
  dateExperience: string;
  categorieId: number;
  vacheId: number;
}

export interface Category {
  categorieId: number;
  nomCategorie: string;
}

export interface SubCategory {
  sousCategorieId: number;
  nomSousCategorie: string;
  categorieId:number;
}

export interface Note {
  noteId: number;
  dateNote: string;
  note: string;
  experienceId: number;
}


export interface Media {
  mediaId: number;
  media: string;
  noteId: number;
}







@Injectable({
  providedIn: 'root'
})



export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000/";
  readonly PhotoUrl = "http://127.0.0.1:8000/media/"

  constructor(private http: HttpClient) {

    this.showLogoutButtonChanged.subscribe((value) => {
      this.showLogoutButton = value;
      console.log("Now show logout button flag value is changed as " + value);
    });

    this.showLoginButtonChanged.subscribe((value) => {
      this.showLoginButton = value;
      console.log("Now show login button flag value is changed as " + value);
    });

    this.showAccessLevelManagerChanged.subscribe((value) => {
      this.showAccessManager = value;
      console.log("Now show access level manager flag value is changed as " + value);
    })

    this.showUserAccountManagerChanged.subscribe((value) => {
      this.showUserAccountManager = value;
      console.log("Now show user account manager flag value is changed as " + value);
    })

    this.showFarmsManagerChanged.subscribe((value) => {
      this.showFarmsManager = value;
      console.log("Now show farm manager flag value is changed as " + value);
    })

    this.showCategoriesManagerChanged.subscribe((value) => {
      this.showCategoriesManager = value;
      console.log("Now show categories manager flag value is changed as " + value);
    })

    this.showGraphsFarmExperimentsLinkChanged.subscribe((value) => {
      this.showGraphsFarmExperimentsLink = value;
      console.log("Now show Graphs Farm Experiments Link flag value is changed as " + value);
    })

    this.showExperienceManagerChanged.subscribe((value) => {
      this.showExperienceManager = value;
      console.log("Now show Experience Manager flag value is changed as " + value);
    })

    this.showNotesManagerChanged.subscribe((value) => {
      this.showNotesManager = value;
      console.log("Now show Notes Manager flag value is changed as " + value);
    })

    this.showFarmsSelectionChanged.subscribe((value) => {
      this.showFarmsSelection = value;
      console.log("Now show Farms Selection flag value is changed as " + value);
    })


    this.showCowManagerChanged.subscribe((value) => {
      this.showCowManager = value;
      console.log("Now show Cow Manager flag value is changed as " + value);
    })

  }

  //get access level list
  getNivAccList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'niveauAcces/');
  }

  //add access level to db
  addNivAcc(val: any) {
    return this.http.post(this.APIUrl + 'niveauAcces/', val);
  }

  //modify access level to db
  updateNivAcc(val: any) {
    return this.http.put(this.APIUrl + 'niveauAcces/', val);
  }

  //delete access level to db
  deleteNivAcc(val: any) {
    return this.http.delete(this.APIUrl + 'niveauAcces/' + val);
  }

  //get users list
  getUsagerList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'usagers/');
  }

  //add new user to db
  addUsager(val: any) {
    return this.http.post(this.APIUrl + 'usagers/', val);
  }

  //modify user
  updateUsager(val: any) {
    return this.http.put(this.APIUrl + 'usagers/', val);
  }

  //delete user
  deleteUsager(val: any) {
    return this.http.delete(this.APIUrl + 'usagers/' + val);
  }

  UploadPhoto(val: any) {
    return this.http.post(this.APIUrl + 'SaveFile', val);
  }

  getAllNiveauAccessNames(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/niveauAcces/');
  }

  //get Category list
  getCategoryList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'categories/');
  }

  //add Category to db
  addCategory(val: any) {
    return this.http.post(this.APIUrl + 'categories/', val);
  }

  //modify Category to db
  updateCategory(val: any) {
    return this.http.put(this.APIUrl + 'categories/', val);
  }

  //delete Category to db
  deleteCategory(val: any) {
    return this.http.delete(this.APIUrl + 'categories/' + val);
  }



  // ******************************************************************
  //get sub-Category list
  getSubCategoryList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'sousCategories/');
  }

  //add sub-Category to db
  addSubCategory(val: any) {
    return this.http.post(this.APIUrl + 'sousCategories/', val);
  }

  //modify sub-Category to db
  updateSubCategory(val: any) {
    return this.http.put(this.APIUrl + 'sousCategories/', val);
  }

  //delete sub-Category to db
  deleteSubCategory(val: any) {
    return this.http.delete(this.APIUrl + 'sousCategories/' + val);
  }

  // ******************************************************************
  //get farms list
  getFarmList(): Observable<any[]> {
  return this.http.get<any[]>(this.APIUrl + 'fermes/');
   }

//add Farm to db
addFarm(val: any) {
  return this.http.post(this.APIUrl + 'fermes/', val);
}

//modify Farm to db
updateFarm(val: any) {
  return this.http.put(this.APIUrl + 'fermes/', val);
}

//delete Farm to db
//just keep it here for the further use if client requirement changes later.
//currently,the client requirement is to delete it ,but not truely deleted.
deleteFarm(val: any) {
  return this.http.delete(this.APIUrl + 'fermes/' + val);
}



// ******************************************************************
 //get cows list
 getCowsList(): Observable<any[]> {
  return this.http.get<any[]>(this.APIUrl + 'vaches/');
   }

//add cow to db
addCow(val: any) {
  return this.http.post(this.APIUrl + 'vaches/', val);
}

//modify cow to db
updateCow(val: any) {
  return this.http.put(this.APIUrl + 'vaches/', val);
}

//delete cow to db
deleteCow(val: any) {
  return this.http.delete(this.APIUrl + 'vaches/' + val);
}
// ******************************************************************


// ******************************************************************
 //get experience list
 getExperiencesList(): Observable<any[]> {
  return this.http.get<any[]>(this.APIUrl + 'experiences/');
   }

//add experience to db
addExperience(val: any) {
  return this.http.post(this.APIUrl + 'experiences/', val);
}

//modify experience to db
updateExperience(val: any) {
  return this.http.put(this.APIUrl + 'experiences/', val);
}

//delete experience to db
deleteExperience(val: any) {
  return this.http.delete(this.APIUrl + 'experiences/' + val);
}
// ******************************************************************




// ******************************************************************
 //get note list
 getNotesList(): Observable<any[]> {
  return this.http.get<any[]>(this.APIUrl + 'notes/');
   }

//add note to db
addNote(val: any) {
  return this.http.post(this.APIUrl + 'notes/', val);
}

//modify note to db
updateNote(val: any) {
  return this.http.put(this.APIUrl + 'notes/', val);
}

//delete note to db
deleteNote(val: any) {
  return this.http.delete(this.APIUrl + 'notes/' + val);
}
// ******************************************************************


// ******************************************************************
 //get media list
 getMediasList(): Observable<any[]> {
  return this.http.get<any[]>(this.APIUrl + 'medias/');
   }

//add media to db
  addMedia(val: any) {
  return this.http.post(this.APIUrl + 'medias/', val);
}

//modify media to db
updateMedia(val: any) {
  return this.http.put(this.APIUrl + 'medias/', val);
}

//delete media to db
deleteMedia(val: any) {
  return this.http.delete(this.APIUrl + 'medias/' + val);
}
// ******************************************************************

 //get users farms list
 getUsersFarmsList(): Observable<any[]> {
  return this.http.get<any[]>(this.APIUrl + 'usagersFermes/');
   }

//add Users Farms to db
  addUsersFarms(val: any) {
  return this.http.post(this.APIUrl + 'usagersFermes/', val);
}

//modify Users Farms to db
updateUsersFarms(val: any) {
  return this.http.put(this.APIUrl + 'usagersFermes/', val);
}

//delete Users Farms to db
deleteUsersFarms(val: any) {
  return this.http.delete(this.APIUrl + 'usagersFermes/' + val);
}
// ******************************************************************








  //for user to login
  currentLoggedInUser: User = { usagerId: 0, login: "", prenomUsager: "", nomUsager: "", motPasse: "", accesId: 0 };

  currentLoggedInUserAccess: string = "";


  //flags for controlling
  showLoginButton: boolean = true;

  showLogoutButton: boolean = false;

  loggedOut: boolean = false;

  showAccessManager: boolean = false;

  showUserAccountManager: boolean = false;

  showFarmsManager: boolean = false;

  showCategoriesManager: boolean = false;

  showSubCategoriesManager: boolean = false;

  showGraphsFarmExperimentsLink: boolean = false;

  showExperienceManager: boolean = false;

  showNotesManager: boolean = false;

  showFarmsSelection: boolean = false;

  showCowManager:boolean=false;


  //to control to show logout button
  showLogoutButtonChanged: Subject<boolean> = new Subject<boolean>();

  logoutButtonEnabled() {
    this.showLogoutButtonChanged.next(true);
  }

  //to control to show login button
  showLoginButtonChanged: Subject<boolean> = new Subject<boolean>();

  loginButtonEnabled() {
    this.showLoginButtonChanged.next(true);
  }


  //to control to show access level manager
  showAccessLevelManagerChanged: Subject<boolean> = new Subject<boolean>();

  accessLevelManagerEnabled() {
    this.showAccessLevelManagerChanged.next(true);
  }


  //to control to show user account manager
  showUserAccountManagerChanged: Subject<boolean> = new Subject<boolean>();

  userAccountManagerEnabled() {
    this.showUserAccountManagerChanged.next(true);
  }

  //to control to show farms manager
  showFarmsManagerChanged: Subject<boolean> = new Subject<boolean>();

  farmsManagerEnabled() {
    this.showFarmsManagerChanged.next(true);
  }

  //to control to show categories manager
  showCategoriesManagerChanged: Subject<boolean> = new Subject<boolean>();

  categoriesManagerEnabled() {
    this.showCategoriesManagerChanged.next(true);
  }


  //to control to show graphs farm experients link
  showGraphsFarmExperimentsLinkChanged: Subject<boolean> = new Subject<boolean>();

  showGraphsFarmExperimentsLinkEnabled() {
    this.showGraphsFarmExperimentsLinkChanged.next(true);
  }


  //to control to show experience manager
  showExperienceManagerChanged: Subject<boolean> = new Subject<boolean>();

  showExperienceManagerEnabled() {
    this.showExperienceManagerChanged.next(true);
  }

  //to control to show notes manager
  showNotesManagerChanged: Subject<boolean> = new Subject<boolean>();

  showNotesManagerEnabled() {
    this.showNotesManagerChanged.next(true);
  }

  //to control to show farms selection
  showFarmsSelectionChanged: Subject<boolean> = new Subject<boolean>();

  showFarmsSelectionEnabled() {
    this.showFarmsSelectionChanged.next(true);
  }


   //to control to show cow manager
   showCowManagerChanged: Subject<boolean> = new Subject<boolean>();

   showCowManagerSelectionEnabled() {
     this.showCowManagerChanged.next(true);
   }



  //variable for transferring
  editingAccess: Access = { accesId: 0, accessName: "" };

  editingUser: User = { usagerId: 0, login: "", prenomUsager: "", nomUsager: "", motPasse: "", accesId: 0 };

  editingFarm: Farm = { fermeId: 0, nomFerme: "", addresseFerme: "", villeFerme: "", provinceFerme: "",deleted:false,deletedDate:""};

  editingExperience: Experience = { experienceId: 0, nomExperience:"", dateExperience:"", categorieId: 0, vacheId: 0};

  editingCategory: Category = { categorieId: 0, nomCategorie: "" };

  editingSubCategory: SubCategory = { sousCategorieId: 0, nomSousCategorie: "", categorieId:0};

  editingCow: Cow = {
    vacheId: 0,
    nomVache: '',
    fermeId: 0
  };


  editingNote: Note = {
    noteId: 0,
    dateNote: "",
    note:"",
    experienceId: 0
  };

  editingMedia:Media={
    mediaId: 0,
    media:"",
    noteId: 0
  }

  editingUserFarm: UsersFarms = {
    usagersFermesId: 0,
    usagerId: 0,
    fermeId: 0
  }

  //currently selected farm
  currentlySelectedFarm: Farm = { fermeId: 0, nomFerme: "Not Selected Yet ", addresseFerme: "", villeFerme: "", provinceFerme: "",deleted:false,deletedDate:""};


}

