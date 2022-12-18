import { Component, OnInit } from '@angular/core';
import { Category, SharedService } from '../shared.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {
  categoriesList: Category[] = [];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.refreshCategoryList();
  }

  // Modification d'une catégorie
  editClick(item: any) {
    this.service.editingCategory.categorieId = item.categorieId;
    this.service.editingCategory.nomCategorie = item.nomCategorie;
  }

  // Supprimer une catégorie
  deleteClick(item: any) {
    if (confirm('Are you sure?')) {
      this.service.deleteCategory(item.categorieId).subscribe(data => {
        alert(data.toString());
        this.ngOnInit();
      })
    }
  }

  // Effacer les données déjà inscrites sur la page
  clearPage() {
    this.service.editingCategory.categorieId = 0;
    this.service.editingCategory.nomCategorie = "";
  }

  // Obtenir la liste des catégories
  refreshCategoryList() {
    this.service.getCategoryList().subscribe(data => {
      this.categoriesList = data;
    })
  }
}
