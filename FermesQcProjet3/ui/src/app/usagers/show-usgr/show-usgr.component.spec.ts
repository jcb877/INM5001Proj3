import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUsgrComponent } from './show-usgr.component';

describe('ShowUsgrComponent', () => {
  let component: ShowUsgrComponent;
  let fixture: ComponentFixture<ShowUsgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUsgrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowUsgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
