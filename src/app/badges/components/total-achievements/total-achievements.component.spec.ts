import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAchievementsComponent } from './total-achievements.component';

describe('TotalAchievementsComponent', () => {
  let component: TotalAchievementsComponent;
  let fixture: ComponentFixture<TotalAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
