import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  user = { userPic: './assets/user-pic.jpg', firstName: 'Sonya', lastName: 'Podliesna' };
}
