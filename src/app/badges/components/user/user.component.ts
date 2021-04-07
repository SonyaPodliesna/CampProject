import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user = { userPic: '../assets/user-pic.jpg', userFirstName: 'Sonya', userLastName: 'Podliesna' };
}
