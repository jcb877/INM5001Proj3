import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditNivaccesComponent } from './add-edit-nivacces.component';

describe('AddEditNivaccesComponent', () => {
  let component: AddEditNivaccesComponent;
  let fixture: ComponentFixture<AddEditNivaccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditNivaccesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditNivaccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
