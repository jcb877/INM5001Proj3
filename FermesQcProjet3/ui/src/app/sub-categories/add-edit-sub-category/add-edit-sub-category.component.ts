import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-sub-category',
  templateUrl: './add-edit-sub-category.component.html',
  styleUrls: ['./add-edit-sub-category.component.css']
})

export class AddEditSubCategoryComponent implements OnInit {
  sousCategorieId: number = 0;
  nomSousCategorie: string = "";
  categorieId: number = 0;
  nomCategorie: string = "";

  // Contrôle ce qui est visualisé dans la page web
  showSuccessMsg: boolean = false;
  showFailMsg: boolean = false;
  showForm: boolean = true;
  showUpdateButton: boolean = false;

  constructor(private service: SharedService) { }

  categoryList: any = [];

  ngOnInit(): void {
    this.refreshCategorieList();
    if (this.service.editingSubCategory.sousCategorieId == 0) {
      console.log("For new sub category");
    }
    else {
      console.log("For update sub category");
      this.sousCategorieId = this.service.editingSubCategory.sousCategorieId;
      this.nomSousCategorie = this.service.editingSubCategory.nomSousCategorie;
      this.categorieId = this.service.editingSubCategory.categorieId;
      this.showUpdateButton = true;
    }
  }

  // Ajouter une nouvelle sous-catégorie
  addNewSubCategory() {
    var val = {
      nomSousCategorie: this.nomSousCategorie,
      categorieId: this.categorieId
    };
    this.service.addSubCategory(val).subscribe(res => {
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

  // Mise à jour d'une sous=catégorie
  updateSubCategory() {
    var val = {
      sousCategorieId: this.sousCategorieId,
      nomSousCategorie: this.nomSousCategorie,
      categorieId: this.categorieId
    };
    console.log(val);
    this.service.updateSubCategory(val).subscribe(res => {
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

  // Obtenir la liste des catégories
  refreshCategorieList() {
    this.service.getCategoryList().subscribe(data => {
      this.categoryList = data;
    })
  }

  // Fermer la fenêtre du message de succès
  closeSuccessMsg() {
    this.showSuccessMsg = false;
    this.ngOnInit();
  }

  // Fermer la fenêtre du message d'erreur
  closeFailMsg() {
    this.showFailMsg = false;
    this.ngOnInit();
  }
}
