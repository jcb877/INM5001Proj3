import { Component, OnInit } from '@angular/core';
import { Farm, SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-graphics',
  templateUrl: './add-edit-graphics.component.html',
  styleUrls: ['./add-edit-graphics.component.css']
})
export class AddEditGraphicsComponent implements OnInit {

  name:string="";
  date:string="";


  showSuccessMsg:boolean=false;
  showFailMsg:boolean=false;
  showForm:boolean=true;
  showUpdateButton:boolean=false;

  farmsList: any = [];
  allFarmsList:Farm[]=[];
  
  constructor(private service:SharedService) {

  }



  ngOnInit(): void {


  }


  getFarmsList(){
    this.service.getFarmList().subscribe(data=> {
      this.allFarmsList=data;
      for (let i = 0; i < this.allFarmsList.length; i++) {
        if(this.allFarmsList[i].deleted!=true){
          this.farmsList.push(this.allFarmsList[i]);  //only not deleted farms in the list
        }
     }
    })
  }


  addNew(){

        this.showForm=false;
        this.showSuccessMsg=true;
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
