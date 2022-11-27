import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCowComponent } from './add-edit-cow.component';

describe('AddEditCowComponent', () => {
  let component: AddEditCowComponent;
  let fixture: ComponentFixture<AddEditCowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
