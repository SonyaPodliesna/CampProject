import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user = { userPic: './assets/user-pic.jpg', firstName: 'Sonya', lastName: 'Podliesna' };

  constructor() { }

  ngOnInit(): void {
  }

}
