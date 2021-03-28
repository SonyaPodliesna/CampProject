import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exoft-achievements',
  templateUrl: './exoft-achievements.component.html',
  styleUrls: ['./exoft-achievements.component.scss']
})
export class ExoftAchievementsComponent implements OnInit {

  exoftAchievements = [
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2021, 3, 28, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records' },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2020, 1, 14, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records' },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2020, 1, 14, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records' },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2020, 1, 14, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records' },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2020, 1, 14, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records' },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2020, 1, 14, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records' },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2020, 1, 14, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records' },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2020, 1, 14, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records' },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2020, 1, 14, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records' },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2020, 1, 14, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records' },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2020, 1, 14, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records' },
    { userFirstName: 'Tanya', userLastName: 'Gogina', userAvatar: './assets/user-pic.jpg', dateEvent: new Date(2020, 1, 14, 12, 0, 0), eventText: 'Got achievement Exoft Turbo Power', eventType: 'Records' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
