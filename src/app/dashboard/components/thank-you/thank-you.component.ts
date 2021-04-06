import { Component } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent {
  user = { userPic: './assets/user-pic.jpg', firstName: 'Taras', lastName: 'Sava' };
}
