import { Component, Input, OnInit } from '@angular/core';
import { Category, SharedService } from '../shared.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoriesList: Category[] = [];



  constructor(private service: SharedService) {

  }

  ngOnInit(): void {

    this.refreshCategoryList();


  }





  editClick(item: any) {
    this.service.editingCategory.categorieId = item.categorieId;
    this.service.editingCategory.nomCategorie = item.nomCategorie;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure?')) {
      this.service.deleteCategory(item.categorieId).subscribe(data => {
        alert(data.toString());
        this.ngOnInit();
      })
    }
  }

  clearPage(){
    this.service.editingCategory.categorieId = 0;
    this.service.editingCategory.nomCategorie = "";
  }



  refreshCategoryList() {
    this.service.getCategoryList().subscribe(data => {
      this.categoriesList = data;
    })
  }


}
