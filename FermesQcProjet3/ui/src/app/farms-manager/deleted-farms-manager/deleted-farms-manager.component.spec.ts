import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedFarmsManagerComponent } from './deleted-farms-manager.component';

describe('DeletedFarmsManagerComponent', () => {
  let component: DeletedFarmsManagerComponent;
  let fixture: ComponentFixture<DeletedFarmsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedFarmsManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedFarmsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
