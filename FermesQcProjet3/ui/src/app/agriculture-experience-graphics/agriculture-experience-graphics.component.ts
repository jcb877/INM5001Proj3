import { Component, OnInit } from '@angular/core';
import { Graphic } from '../shared.service';

@Component({
  selector: 'app-agriculture-experience-graphics',
  templateUrl: './agriculture-experience-graphics.component.html',
  styleUrls: ['./agriculture-experience-graphics.component.css']
})
export class AgricultureExperienceGraphicsComponent implements OnInit {

  GraphicList:Graphic[]=[];

  constructor() { }

  ngOnInit(): void {
    this.createGraphicList();
  }

  createGraphicList(){
    var Grahpic1:Graphic={Id:1,name:"Graphic 1",date:"2022-07-09",graphicPath:"../../assets/images/farm1.jpg"};
    var Grahpic2:Graphic={Id:2,name:"Graphic 2",date:"2022-07-09",graphicPath:"../../assets/images/farm2.jpg"};
    var Grahpic3:Graphic={Id:3,name:"Graphic 3",date:"2022-07-09",graphicPath:"../../assets/images/farm3.jpg"};
    var Grahpic4:Graphic={Id:4,name:"Graphic 4",date:"2022-07-09",graphicPath:"../../assets/images/farm4.jpg"};
    var Grahpic5:Graphic={Id:5,name:"Graphic 5",date:"2022-07-09",graphicPath:"../../assets/images/farm5.jpg"};
    var Grahpic6:Graphic={Id:6,name:"Graphic 6",date:"2022-07-09",graphicPath:"../../assets/images/farm6.jpg"};
    var Grahpic7:Graphic={Id:7,name:"Graphic 7",date:"2022-07-09",graphicPath:"../../assets/images/farm7.jpg"};
    var Grahpic8:Graphic={Id:8,name:"Graphic 8",date:"2022-07-09",graphicPath:"../../assets/images/farm8.jpg"};
    var Grahpic9:Graphic={Id:9,name:"Graphic 9",date:"2022-07-09",graphicPath:"../../assets/images/farm9.jpg"};



    this.GraphicList.push(Grahpic1);
    this.GraphicList.push(Grahpic2);
    this.GraphicList.push(Grahpic3);
    this.GraphicList.push(Grahpic4);
    this.GraphicList.push(Grahpic5);
    this.GraphicList.push(Grahpic6);
    this.GraphicList.push(Grahpic7);
    this.GraphicList.push(Grahpic8);
    this.GraphicList.push(Grahpic9);


  }
}
