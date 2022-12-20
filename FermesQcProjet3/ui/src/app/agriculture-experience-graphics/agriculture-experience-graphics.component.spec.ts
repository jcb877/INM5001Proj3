import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgricultureExperienceGraphicsComponent } from './agriculture-experience-graphics.component';

describe('AgricultureExperienceGraphicsComponent', () => {
  let component: AgricultureExperienceGraphicsComponent;
  let fixture: ComponentFixture<AgricultureExperienceGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgricultureExperienceGraphicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgricultureExperienceGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
