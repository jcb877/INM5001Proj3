import { Component, OnInit } from '@angular/core';
import { Category, SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})

export class AddEditCategoryComponent implements OnInit {
  categorieId: number = 0;
  categoryName: string = "";

  categoriesList: Category[] = [];

  showSuccessMsg: boolean = false;
  showFailMsg: boolean = false;
  showForm: boolean = true;
  showUpdateButton: boolean = false;

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.refreshCategoryList();
    if (this.service.editingCategory.categorieId == 0) {
      console.log("For new category");
    }
    else {
      console.log("For update category");
      this.categorieId = this.service.editingCategory.categorieId;
      this.categoryName = this.service.editingCategory.nomCategorie;
      this.showUpdateButton = true;
    }
  }

  // Ajout d'une nouvelle catégorie
  addNewCategory() {
    var val = {
      nomCategorie: this.categoryName
    };

    this.service.addCategory(val).subscribe(res => {
      alert(res.toString());

      if (res.toString().includes("Success")) {
        this.showForm = false;
        this.showSuccessMsg = true;
      }
      else {
        this.showForm = false;
        this.showFailMsg = true;
      }
    });
  }

  // Mise à jour de la catégorie
  updateCategory() {
    var val = {
      categorieId: this.categorieId,
      nomCategorie: this.categoryName
    };

    this.service.updateCategory(val).subscribe(res => {
      alert(res.toString());

      if (res.toString().includes("Succes")) {
        this.showForm = false;
        this.showSuccessMsg = true;
      }
      else {
        this.showForm = false;
        this.showFailMsg = true;
      }
    });
  }

  // Fermeture de la boite de message de succès
  closeSuccessMsg() {
    this.showSuccessMsg = false;
    this.ngOnInit();
  }

  // Fermeture de la boite de message d'erreur
  closeFailMsg() {
    this.showFailMsg = false;
    this.ngOnInit();
  }

  // Obtenir la liste des catégories
  refreshCategoryList() {
    this.service.getCategoryList().subscribe(data => {
      this.categoriesList = data;
    })
  }
}
