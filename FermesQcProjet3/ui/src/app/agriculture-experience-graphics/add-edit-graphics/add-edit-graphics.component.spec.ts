import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGraphicsComponent } from './add-edit-graphics.component';

describe('AddEditGraphicsComponent', () => {
  let component: AddEditGraphicsComponent;
  let fixture: ComponentFixture<AddEditGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditGraphicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
