import { Component, OnInit } from '@angular/core';
import { Category, SharedService, SubCategory } from '../shared.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})

export class SubCategoriesComponent implements OnInit {
  subCategoriesList: SubCategory[] = [];
  categoriesList: Category[] = [];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.refreshSubCategoryList();
    this.refreshCategoryList();
  }

  // Obtenir la liste des catégories
  refreshCategoryList() {
    this.service.getCategoryList().subscribe(data => {
      this.categoriesList = data;
    })
  }

  // Mettre à jour la sous-catégorie
  editClick(item: any) {
    console.log(item);
    this.service.editingSubCategory = item;
  }

  // Supprimer la sous-catégorie
  deleteClick(item: any) {
    if (confirm('Are you sure?\nÊtes-vous sûr?')) {
      this.service.deleteSubCategory(item.sousCategorieId).subscribe(data => {
        alert(data.toString());
        this.ngOnInit();
      })
    }
  }

  // Supprimer les informations dans les champs
  clearPage() {
    this.service.editingSubCategory.sousCategorieId = 0;
    this.service.editingSubCategory.nomSousCategorie = "";
    this.service.editingSubCategory.categorieId = 0;
  }

  // Obtenir la liste des sous-catégories
  refreshSubCategoryList() {
    this.service.getSubCategoryList().subscribe(data => {
      this.subCategoriesList = data;
    })
  }

  // Convertir la clé primaire en nom de catégorie pour laquelle la sous-catégorie est associée
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
}


