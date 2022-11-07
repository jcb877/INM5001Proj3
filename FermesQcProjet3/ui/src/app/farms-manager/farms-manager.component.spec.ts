import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmsManagerComponent } from './farms-manager.component';

describe('FarmsManagerComponent', () => {
  let component: FarmsManagerComponent;
  let fixture: ComponentFixture<FarmsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmsManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
