import { Component, OnInit } from '@angular/core';
import { Experience, SharedService } from '../shared.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceList:Experience[]=[];

  fakeExperienceList:Experience[]=[];


  constructor(private service:SharedService) { }

  ngOnInit(): void {
    //this.getFarmsList();

    //fake only for testing
    if(this.experienceList.length==0){
      console.log("Fake list started");
      var e1:Experience={experienceId:1,dateExperience:"2022-10-23",  nomCategorie:"Farm check",nomSousCategorie:"Regular check",fermeId_id:2};
      var e2:Experience={experienceId:2,dateExperience:"2022-10-24",  nomCategorie:"Farm cleaning",nomSousCategorie:"Desinfection",fermeId_id:6};
      var e3:Experience={experienceId:3,dateExperience:"2022-10-25",  nomCategorie:"Environment test",nomSousCategorie:"Chemical residues",fermeId_id:8};
      
      this.fakeExperienceList.push(e1);
      this.fakeExperienceList.push(e2);
      this.fakeExperienceList.push(e3);

      this.experienceList=this.fakeExperienceList;
      console.log("length"+this.experienceList.length);
    }
  }


  getFarmsList(){
    this.service.getNivAccList().subscribe(data=> {
      this.experienceList=data;
    })
  }




  editClick(item: any){
    this.service.editingExperience.experienceId=item.experienceId;

    this.service.editingExperience.dateExperience=item.dateExperience;

    this.service.editingExperience.nomCategorie=item.nomCategorie;

    this.service.editingExperience.nomSousCategorie=item.nomSousCategorie;

    this.service.editingExperience.fermeId_id=item.fermeId_id;




    console.log("Editing Experience id "+this.service.editingExperience.experienceId);
    console.log("Editing Experience name "+this.service.editingExperience.dateExperience);

  }


  deleteClick(item: any){
    if(confirm('Are you sure?')){
      this.service.deleteNivAcc(item.accesId).subscribe(data=>{
        alert(data.toString());
        this.ngOnInit();
      })
    }
  }
}
