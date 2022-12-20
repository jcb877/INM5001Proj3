import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFarmsManagerComponent } from './users-farms-manager.component';

describe('UsersFarmsManagerComponent', () => {
  let component: UsersFarmsManagerComponent;
  let fixture: ComponentFixture<UsersFarmsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersFarmsManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersFarmsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
