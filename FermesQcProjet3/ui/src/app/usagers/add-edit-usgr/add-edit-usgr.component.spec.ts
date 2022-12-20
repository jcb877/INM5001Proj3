import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUsgrComponent } from './add-edit-usgr.component';

describe('AddEditUsgrComponent', () => {
  let component: AddEditUsgrComponent;
  let fixture: ComponentFixture<AddEditUsgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditUsgrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditUsgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
