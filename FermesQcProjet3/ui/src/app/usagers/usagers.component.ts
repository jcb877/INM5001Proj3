import { User } from './../shared.service';
import { SharedService } from 'src/app/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usagers',
  templateUrl: './usagers.component.html',
  styleUrls: ['./usagers.component.css']
})
export class UsagersComponent implements OnInit {
  // userList: User[] = [];


  constructor(private service: SharedService) { }

  ngOnInit(): void {
    // if (this.userList.length == 0) {
    //   var u1:User = { usagerId: 1, login:"SuperAdmin", prenomUsager:"Super", nomUsager:"Admin", motPasse:"123456", accesId: 1 };

    //   this.userList.push(u1);
    // }

  }

}
