import { Component, OnInit } from '@angular/core';
import { SharedService, SubCategory } from '../shared.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent implements OnInit {

  subCategoriesList:SubCategory[]=[];

  // fakeSubCategoriesList:SubCategory[]=[];


    constructor(private service:SharedService) {

    }



    ngOnInit(): void {
      this.refreshSubCategoryList();
    //this.getFarmsList();

    //fake only for testing
    // if(this.subCategoriesList.length==0){
    //   console.log("Fake list started");
    //   var c1:SubCategory={sousCategorieId:1,nomSousCategorie:"Sub Livestock Health Testing 1"};
    //   var c2:SubCategory={sousCategorieId:2,nomSousCategorie:"Sub Livestock Health Testing 2"};
    //   var c3:SubCategory={sousCategorieId:3,nomSousCategorie:"Sub Livestock Health Testing 3"};
    //   var c4:SubCategory={sousCategorieId:4,nomSousCategorie:"Sub Livestock Health Testing 4"};
    //   var c5:SubCategory={sousCategorieId:5,nomSousCategorie:"Sub Livestock Health Testing 5"};
    //   var c6:SubCategory={sousCategorieId:6,nomSousCategorie:"Sub Livestock Health Testing 6"};

    //   this.fakeSubCategoriesList.push(c1);
    //   this.fakeSubCategoriesList.push(c2);
    //   this.fakeSubCategoriesList.push(c3);
    //   this.fakeSubCategoriesList.push(c4);
    //   this.fakeSubCategoriesList.push(c5);
    //   this.fakeSubCategoriesList.push(c6);

    //   this.subCategoriesList=this.fakeSubCategoriesList;
    //   console.log("length"+this.subCategoriesList.length);
    // }


    }





    editClick(item:any){
      console.log(item);

      this.service.editingSubCategory=item;
      // this.service.editingSubCategory.nomSousCategorie=item.nomSousCategorie;
      // console.log("sub category id"+this.service.editingSubCategory.sousCategorieId);
      // console.log("sub category name"+this.service.editingSubCategory.nomSousCategorie);
    }

    deleteClick(item:any){
      if(confirm('Are you sure?')){
        this.service.deleteSubCategory(item.sousCategorieId).subscribe(data=>{
          alert(data.toString());
          this.ngOnInit();
        })
      }
    }

    clearPage(){
      this.service.editingSubCategory.sousCategorieId=0;
      this.service.editingSubCategory.nomSousCategorie="";
      // this.service.editingSubCategory.categorieId=0
      this.service.editingSubCategory.categorieId=0;
    }

  refreshSubCategoryList() {
    this.service.getSubCategoryList().subscribe(data => {
      this.subCategoriesList = data;
    })
  }

}


