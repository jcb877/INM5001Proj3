import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMediaComponent } from './add-edit-media.component';

describe('AddEditMediaComponent', () => {
  let component: AddEditMediaComponent;
  let fixture: ComponentFixture<AddEditMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
