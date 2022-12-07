import { Component, OnInit } from '@angular/core';
import { Category, Cow, Farm, SharedService, SubCategory } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-experience',
  templateUrl: './add-edit-experience.component.html',
  styleUrls: ['./add-edit-experience.component.css']
})
export class AddEditExperienceComponent implements OnInit {

  experienceId:number=0;
  nomExperience:string="";
  dateExperience:string="";
  categorieId:number=0;
  nomCategorie:string="";
  vacheId:number=0
  nomVache: string="";



  categoriesList:Category[]=[];
  cowsList:Cow[]=[];

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
      this.nomExperience=this.service.editingExperience.nomExperience;
      this.dateExperience=this.service.editingExperience.dateExperience;
      this.categorieId=this.service.editingExperience.categorieId;
      this.nomCategorie=this.service.editingExperience.nomCategorie;
      this.vacheId=this.service.editingExperience.vacheId;
      this.nomVache=this.service.editingExperience.nomVache;

      this.showUpdateButton=true;
    }


    this.getCategoryList();
    this.getCowsList();

  }


  addNewExperience(){

    var val = {
      // experienceId:this.experienceId,
      nomExperience:this.nomExperience,
      dateExperience:this.dateExperience,
      categorieId:this.categorieId,
      vacheId:this.vacheId
    };

    console.log("Info sur expérience : " + val);

    // console.log("This is date (before adding into db )"+val.dateExperience);


    this.service.addExperience(val).subscribe(res=>{
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
      nomExperience:this.nomExperience,
      dateExperience:this.dateExperience,
      categorieId:this.categorieId,
      vacheId:this.vacheId
    };


    this.service.updateExperience(val).subscribe(res=>{
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


  getCategoryList(){
    this.service.getCategoryList().subscribe(data => {
      this.categoriesList = data;
    })
  }




  getCowsList(){
    this.service.getCowsList().subscribe(data=> {
      this.cowsList=data;
    })
  }

  convertFarmNameIntoFarmId(){
    // for(let f of this.farmsList){
    //   if(f.nomFerme==this.nomFerme){
    //     this.fermeId_id=f.fermeId;
    //   }
    // }
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
