import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUserFarmComponent } from './add-edit-user-farm.component';

describe('AddEditUserFarmComponent', () => {
  let component: AddEditUserFarmComponent;
  let fixture: ComponentFixture<AddEditUserFarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditUserFarmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditUserFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
