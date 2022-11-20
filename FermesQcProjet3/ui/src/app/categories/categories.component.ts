import { Component, OnInit } from '@angular/core';
import { Category, SharedService } from '../shared.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoriesList: Category[] = [];

  fakeCategoriesList: Category[] = [];


  constructor(private service: SharedService) {

  }



  ngOnInit(): void {
    //this.getFarmsList();

    //fake only for testing
    if (this.categoriesList.length == 0) {
      console.log("Fake list started");
      var c1: Category = { categorieId: 1, nomCategorie: "Livestock Health Testing" };
      var c2: Category = { categorieId: 2, nomCategorie: "Environment Pollution Testing" };
      var c3: Category = { categorieId: 3, nomCategorie: "Pesticide Residues Testing" };

      this.fakeCategoriesList.push(c1);
      this.fakeCategoriesList.push(c2);
      this.fakeCategoriesList.push(c3);

      this.categoriesList = this.fakeCategoriesList;
      console.log("length" + this.categoriesList.length);
    }


  }





  editClick(item: any) {
    this.service.editingCategory.categorieId = item.categorieId;
    this.service.editingCategory.nomCategorie = item.nomCategorie;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure?')) {
      this.service.deleteNivAcc(item.accesId).subscribe(data => {
        alert(data.toString());
        this.ngOnInit();
      })
    }
  }


}
