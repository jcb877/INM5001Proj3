import { Component, OnInit } from '@angular/core';
import { Experience, SharedService } from '../shared.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceList:Experience[]=[];




  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.getExperiencesList();

  }


  getExperiencesList(){
    this.service.getExperiencesList().subscribe(data=> {
      this.experienceList=data;
      console.log("List length is "+this.experienceList.length);
    })
  }




  editClick(item: any){
    this.service.editingExperience.experienceId=item.experienceId;
    this.service.editingExperience.nomExperience=item.nomExperience;
    this.service.editingExperience.dateExperience=item.dateExperience;

    this.service.editingExperience.categorieId=item.categorieId;

    this.service.editingExperience.vacheId=item.vacheId;




    console.log("Editing Experience id "+this.service.editingExperience.experienceId);
    console.log("Editing Experience name "+this.service.editingExperience.dateExperience);

  }


  clearPage(){
    this.service.editingExperience.experienceId=0;
    this.service.editingExperience.nomExperience="";
    this.service.editingExperience.dateExperience="";

    this.service.editingExperience.categorieId=0;

    this.service.editingExperience.vacheId=0;
  }

  deleteClick(item: any){
    if(confirm('Are you sure? Vous etes sur ?')){
      this.service.deleteExperience(item.experienceId).subscribe(res=>{

      if(res.toString().includes("Succes")){
          alert("L'Experience est ete supprime. The experience is deleted.");
       }
       else{
          alert("Echec a supprimer. Delete is failed.");
       }

       this.ngOnInit();

      })
    }
  }
}
