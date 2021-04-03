import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = {userPic: '../assets/user-pic.jpg', userFirstName: "Sonya", userLastName: 'Podliesna'}

  constructor() { }

  ngOnInit(): void {
  }

}
