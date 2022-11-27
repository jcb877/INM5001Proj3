import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CowManagerComponent } from './cow-manager.component';

describe('CowManagerComponent', () => {
  let component: CowManagerComponent;
  let fixture: ComponentFixture<CowManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CowManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CowManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
