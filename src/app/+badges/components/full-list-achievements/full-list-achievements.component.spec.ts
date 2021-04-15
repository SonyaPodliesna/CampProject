import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullListAchievementsComponent } from './full-list-achievements.component';

describe('FullListAchievementsComponent', () => {
  let component: FullListAchievementsComponent;
  let fixture: ComponentFixture<FullListAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullListAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullListAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
