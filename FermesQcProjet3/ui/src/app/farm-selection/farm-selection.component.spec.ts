import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmSelectionComponent } from './farm-selection.component';

describe('FarmSelectionComponent', () => {
  let component: FarmSelectionComponent;
  let fixture: ComponentFixture<FarmSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
