import { Component, OnInit } from '@angular/core';
import { Category, SharedService, SubCategory } from '../shared.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent implements OnInit {

  subCategoriesList: SubCategory[] = [];


  categoriesList: Category[] = [];

  constructor(private service: SharedService) {

  }

  ngOnInit(): void {
    this.refreshSubCategoryList();
    this.refreshCategoryList();

  }

  refreshCategoryList() {
    this.service.getCategoryList().subscribe(data => {
      this.categoriesList = data;
    })
  }


  editClick(item: any) {
    console.log(item);

    this.service.editingSubCategory = item;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure?')) {
      this.service.deleteSubCategory(item.sousCategorieId).subscribe(data => {
        alert(data.toString());
        this.ngOnInit();
      })
    }
  }

  clearPage() {
    this.service.editingSubCategory.sousCategorieId = 0;
    this.service.editingSubCategory.nomSousCategorie = "";
    // this.service.editingSubCategory.categorieId=0
    this.service.editingSubCategory.categorieId = 0;
  }

  refreshSubCategoryList() {
    this.service.getSubCategoryList().subscribe(data => {
      this.subCategoriesList = data;
    })
  }

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


