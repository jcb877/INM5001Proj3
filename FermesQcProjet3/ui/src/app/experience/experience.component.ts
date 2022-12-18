import { Component, OnInit } from '@angular/core';
import { Category, Cow, Experience, SharedService, SubCategory } from '../shared.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {
  experienceList: Experience[] = [];
  subCategoriesList: SubCategory[] = [];
  categoriesList: Category[] = [];
  allCowsList: Cow[] = [];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.getExperiencesList();
    this.refreshSubCategoryList();
    this.refreshCategoryList();
    this.getCowsList();
  }

  // Obtenir la liste des expériences
  getExperiencesList() {
    this.service.getExperiencesList().subscribe(data => {
      this.experienceList = data;
      console.log("List length is " + this.experienceList.length);
    })
  }

  // Mise à jour d'une expérience
  editClick(item: any) {
    this.service.editingExperience.experienceId = item.experienceId;
    this.service.editingExperience.nomExperience = item.nomExperience;
    this.service.editingExperience.dateExperience = item.dateExperience;
    this.service.editingExperience.categorieId = item.categorieId;
    this.service.editingExperience.sousCategorieId = item.sousCategorieId;
    this.service.editingExperience.vacheId = item.vacheId;

    console.log("Editing Experience id " + this.service.editingExperience.experienceId);
    console.log("Editing Experience name " + this.service.editingExperience.dateExperience);
  }

  // Effacer les données déjà entrées. Pour réinitialisation.
  clearPage() {
    this.service.editingExperience.experienceId = 0;
    this.service.editingExperience.nomExperience = "";
    this.service.editingExperience.dateExperience = "";
    this.service.editingExperience.categorieId = 0;
    this.service.editingExperience.sousCategorieId = 0;
    this.service.editingExperience.vacheId = 0;
  }

  // Supprimer une expérience
  deleteClick(item: any) {
    if (confirm('Are you sure? Êtes-vous sûr ?')) {
      this.service.deleteExperience(item.experienceId).subscribe(res => {

        if (res.toString().includes("Succes")) {
          alert("L'Expérience est été supprimée. The experience is deleted.");
        }
        else {
          alert("Échec lors de la suppression. Delete has failed.");
        }
        this.ngOnInit();
      })
    }
  }

  // Obtenir la liste des sous-catégories
  refreshSubCategoryList() {
    this.service.getSubCategoryList().subscribe(data => {
      this.subCategoriesList = data;
    })
  }

  // Obtenir la liste des catégories
  refreshCategoryList() {
    this.service.getCategoryList().subscribe(data => {
      this.categoriesList = data;
    })
  }

  // Obtenir la liste des vaches
  getCowsList() {
    this.allCowsList = [];

    this.service.getCowsList().subscribe(data => {
      this.allCowsList = data;
    })
  }

  // Conversion de la clé primaire au nom de la catégorie pour faciliter l'affichage
  convertIdIntoNameCategory(Id: number) {
    var name = "";
    for (let i = 0; i < this.categoriesList.length; i++) {
      if (this.categoriesList[i].categorieId == Id) {
        name = this.categoriesList[i].nomCategorie;
        break;
      }
    }
    return name;
  }

  // Conversion de la clé primaire au nom de la sous-catégorie pour faciliter l'affichage
  convertIdIntoNameSubCategory(Id: number) {
    var name = "";
    for (let i = 0; i < this.subCategoriesList.length; i++) {
      if (this.subCategoriesList[i].sousCategorieId == Id) {
        name = this.subCategoriesList[i].nomSousCategorie;
        break;
      }
    }
    return name;
  }

  // Conversion de la clé primaire au nom de la vache pour faciliter l'affichage
  convertIdIntoNameCow(Id: number) {
    var name = "";
    for (let i = 0; i < this.allCowsList.length; i++) {
      if (this.allCowsList[i].vacheId == Id) {
        name = this.allCowsList[i].nomVache;
        break;
      }
    }
    return name;
  }

  // Voir la note attachée à l'expérience
  checkNotes(item: any) {
    this.service.editingExperience.experienceId = item.experienceId;
    console.log("Check notes list of the experience " + this.service.editingExperience.experienceId);
  }
}
