import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-sub-category',
  templateUrl: './add-edit-sub-category.component.html',
  styleUrls: ['./add-edit-sub-category.component.css']
})
export class AddEditSubCategoryComponent implements OnInit {

  sousCategorieId:number;
  nomSousCategorie:string;
  categorieId:number;



  showSuccessMsg:boolean=false;
  showFailMsg:boolean=false;
  showForm:boolean=true;
  showUpdateButton:boolean=false;

  constructor(private service:SharedService) {
    this.sousCategorieId=0;
    this.nomSousCategorie="";
    this.categorieId=0;
  }

  categoryList: any = [];

  ngOnInit(): void {
    this.refreshCategorieList();

    if(this.service.editingSubCategory.sousCategorieId == null){
      console.log("For new sub category");
    }
    else{
      console.log("For update sub category");

      this.sousCategorieId=this.service.editingSubCategory.sousCategorieId;
      this.nomSousCategorie=this.service.editingSubCategory.nomSousCategorie;
      this.categorieId=this.service.editingSubCategory.categorieId;

      this.showUpdateButton=true;
    }

  }


  addNewSubCategory(){

    var val = {
      nomSousCategorie:this.nomSousCategorie,
      categorieId:this.categorieId
    };

    this.service.addSubCategory(val).subscribe(res=>{
      alert(res.toString());

      if(res.toString().includes("Success")){
        this.showForm=false;
        this.showSuccessMsg=true;
      }
      else{
        this.showForm=false;
        this.showFailMsg=true;
      }

    });


  }

  updateSubCategory(){

    var val = {
      sousCategorieId: 2, //******************************************************* */
      nomSousCategorie: this.nomSousCategorie,
      categorieId: this.categorieId
    };
console.log(val);


    this.service.updateSubCategory(val).subscribe(res=>{
    alert(res.toString());

    if(res.toString().includes("Succes")){
      this.showForm=false;
      this.showSuccessMsg=true;
    }
    else{
      this.showForm=false;
      this.showFailMsg=true;
    }


    });
  }

  refreshCategorieList() {
    this.service.getCategoryList().subscribe(data => {
      this.categoryList = data;
    })
  }


  closeSuccessMsg(){
      this.showSuccessMsg=false;
      this.ngOnInit();
  }

  closeFailMsg(){
      this.showFailMsg=false;
      this.ngOnInit();

  }

}
