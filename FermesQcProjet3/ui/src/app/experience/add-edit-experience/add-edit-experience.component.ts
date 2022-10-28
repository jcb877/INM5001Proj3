import { Component, OnInit } from '@angular/core';
import { Category, Farm, SharedService, SubCategory } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-experience',
  templateUrl: './add-edit-experience.component.html',
  styleUrls: ['./add-edit-experience.component.css']
})
export class AddEditExperienceComponent implements OnInit {

  experienceId:number=0;
  dateExperience:string="";   
  nomCategorie:string=""; 
  nomSousCategorie:string=""; 
  nomFerme:string="";
  fermeId_id:number=0; 

  categoriesList:Category[]=[];

  subCategoriesList:SubCategory[]=[];

  farmsList:Farm[]=[];

  //for testing
  fakeCategoriesList:Category[]=[];
  fakeSubCategoriesList:SubCategory[]=[];
  fakeFarmsList:Farm[]=[];

  showSuccessMsg:boolean=false;
  showFailMsg:boolean=false;
  showForm:boolean=true;
  showUpdateButton:boolean=false;
  
  constructor(private service:SharedService) {

  }



  ngOnInit(): void {

    if(this.service.editingExperience.experienceId==0){
      console.log("For new experience");
    }
    else{
      console.log("For update experience");

      this.experienceId=this.service.editingExperience.experienceId;

      this.dateExperience=this.service.editingExperience.dateExperience;

      this.nomCategorie=this.service.editingExperience.nomCategorie;

      this.nomSousCategorie=this.service.editingExperience.nomSousCategorie;

      this.fermeId_id=this.service.editingExperience.fermeId_id;

      this.showUpdateButton=true;
    }


    this.getCategoryList();
    this.getSubCategoryList();
    this.getFarmsList();

  }


  addNewExperience(){

    this.convertFarmNameIntoFarmId();
    
    var val = {
      experienceId:this.experienceId,
      dateExperience:this.dateExperience,  
      nomCategorie:this.nomCategorie, 
      nomSousCategorie:this.nomSousCategorie, 
      fermeId_id:this.fermeId_id 
    };

    console.log("This is date "+this.dateExperience);

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

  updateExperience(){
    var val = {
      experienceId:this.experienceId,
      dateExperience:this.dateExperience,   
      nomCategorie:this.nomCategorie, 
      nomSousCategorie:this.nomSousCategorie, 
      fermeId_id:this.fermeId_id 
    };


    this.service.updateUsager(val).subscribe(res=>{
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


  getCategoryList(){

    console.log("Fake list started");
      var c1:Category={categorieId:1,nomCategorie:"Livestock Health Testing"};
      var c2:Category={categorieId:2,nomCategorie:"Environment Pollution Testing"};
      var c3:Category={categorieId:3,nomCategorie:"Pesticide Residues Testing"};
      
      this.fakeCategoriesList.push(c1);
      this.fakeCategoriesList.push(c2);
      this.fakeCategoriesList.push(c3);

      this.categoriesList=this.fakeCategoriesList;

  }

  getSubCategoryList(){

    console.log("Fake list started");
    var sc1:SubCategory={sousCategorieId:1,nomSousCategorie:"Test 1"};
    var sc2:SubCategory={sousCategorieId:2,nomSousCategorie:"Test 2"};
    var sc3:SubCategory={sousCategorieId:3,nomSousCategorie:"Test 3"};
    
    this.fakeSubCategoriesList.push(sc1);
    this.fakeSubCategoriesList.push(sc2);
    this.fakeSubCategoriesList.push(sc3);

    this.subCategoriesList=this.fakeSubCategoriesList;
    
  }


  getFarmsList(){
    console.log("Fake list started");
    var farm1:Farm={fermeId:1,nomFerme:"test farm 1",addresseFerme:"123 test street",villeFerme:"test city",provinceFerme:"test province"};
    var farm2:Farm={fermeId:2,nomFerme:"test farm 2",addresseFerme:"456 test street",villeFerme:"test city",provinceFerme:"test province"};
    var farm3:Farm={fermeId:3,nomFerme:"test farm 2",addresseFerme:"789 test street",villeFerme:"test city",provinceFerme:"test province"};
      
    this.fakeFarmsList.push(farm1);
    this.fakeFarmsList.push(farm2);
    this.fakeFarmsList.push(farm3);

    this.farmsList=this.fakeFarmsList;
  }

  convertFarmNameIntoFarmId(){
    for(let f of this.farmsList){
      if(f.nomFerme==this.nomFerme){
        this.fermeId_id=f.fermeId;
      }
    }
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
