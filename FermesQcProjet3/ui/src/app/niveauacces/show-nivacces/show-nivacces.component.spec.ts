import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNivaccesComponent } from './show-nivacces.component';

describe('ShowNivaccesComponent', () => {
  let component: ShowNivaccesComponent;
  let fixture: ComponentFixture<ShowNivaccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowNivaccesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowNivaccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
