import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-sub-category',
  templateUrl: './add-edit-sub-category.component.html',
  styleUrls: ['./add-edit-sub-category.component.css']
})
export class AddEditSubCategoryComponent implements OnInit {

  subCategoryId:number=0;
  subCategoryName:string="";  



  showSuccessMsg:boolean=false;
  showFailMsg:boolean=false;
  showForm:boolean=true;
  showUpdateButton:boolean=false;
  
  constructor(private service:SharedService) {

  }



  ngOnInit(): void {

    if(this.service.editingSubCategory.sousCategorieId==0){
      console.log("For new sub category");
    }
    else{
      console.log("For update sub category");

      this.subCategoryId=this.service.editingSubCategory.sousCategorieId;
      this.subCategoryName=this.service.editingSubCategory.nomSousCategorie;  

      this.showUpdateButton=true;
    }

  }


  addNewSubCategory(){

    var val = {
      nomSousCategorie:this.subCategoryName  
    };

    //modify this once farm api is done
    this.service.addUsager(val).subscribe(res=>{
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
      nomCategorie:this.subCategoryName  
    };


    this.service.updateUsager(val).subscribe(res=>{
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




  closeSuccessMsg(){
      this.showSuccessMsg=false;
      this.ngOnInit();
  }
  
  closeFailMsg(){
      this.showFailMsg=false;
      this.ngOnInit();
  
  }

}
