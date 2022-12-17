import { SharedService } from 'src/app/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usagers',
  templateUrl: './usagers.component.html',
  styleUrls: ['./usagers.component.css']
})
export class UsagersComponent implements OnInit {


  constructor(private service: SharedService) { }

  ngOnInit(): void {

  }

}
