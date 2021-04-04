import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  user = { firstName: 'Sonya', lastName: 'Podliesna' };
  currentTime = '';

  constructor() { }

  getCurrentTime(): string {
    const d = new Date();
    const n = d.getHours();

    if (n >= 5 && n < 12) {
      return 'Good morning';
    } else if (n >= 12 && n < 18) {
      return 'Good day';
    } else if (n >= 18 && n <= 24) {
      return 'Good evening';
    } else {
      return 'Good night';
    }
  }

  ngOnInit(): void {
    this.currentTime = this.getCurrentTime();
  }

}
