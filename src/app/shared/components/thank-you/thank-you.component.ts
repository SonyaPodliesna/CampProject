import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
 public user = { userPic: './assets/user-pic.jpg', firstName: 'Taras', lastName: 'Sava' };

  constructor() { }

  ngOnInit(): void {
  }

}
