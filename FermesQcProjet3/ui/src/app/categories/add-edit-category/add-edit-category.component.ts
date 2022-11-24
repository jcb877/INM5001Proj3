import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})
export class AddEditCategoryComponent implements OnInit {

  categoryId: number = 0;
  categoryName: string = "";



  showSuccessMsg: boolean = false;
  showFailMsg: boolean = false;
  showForm: boolean = true;
  showUpdateButton: boolean = false;

  constructor(private service: SharedService) {

  }



  ngOnInit(): void {

    if (this.service.editingCategory.categorieId == 0) {
      console.log("For new category");
    }
    else {
      console.log("For update category");

      this.categoryId = this.service.editingCategory.categorieId;
      this.categoryName = this.service.editingCategory.nomCategorie;

      this.showUpdateButton = true;
    }

  }


  addNewCategory() {

    var val = {
      nomCategorie: this.categoryName
    };

    //modify this once farm api is done
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

  updateCategory() {
    var val = {
      categoryId: this.categoryId,
      nomCategorie: this.categoryName
    };


    this.service.updateCategory(val).subscribe(res => {
      alert(res.toString());


      // if (res.toString().includes("Succes")) {
      //   this.showForm = false;
      //   this.showSuccessMsg = true;
      // }
      // else {
      //   this.showForm = false;
      //   this.showFailMsg = true;
      // }
      // this.service.editingCategory = { categorieId: 0, nomCategorie: "" };
    });
  }


  closeSuccessMsg() {
    this.showSuccessMsg = false;
    this.ngOnInit();
  }

  closeFailMsg() {
    this.showFailMsg = false;
    this.ngOnInit();

  }

}
