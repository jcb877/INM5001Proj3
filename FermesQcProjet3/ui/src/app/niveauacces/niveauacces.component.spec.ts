import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NiveauaccesComponent } from './niveauacces.component';

describe('NiveauaccesComponent', () => {
  let component: NiveauaccesComponent;
  let fixture: ComponentFixture<NiveauaccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NiveauaccesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NiveauaccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
