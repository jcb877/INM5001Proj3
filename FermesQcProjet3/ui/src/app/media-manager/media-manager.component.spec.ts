import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaManagerComponent } from './media-manager.component';

describe('MediaManagerComponent', () => {
  let component: MediaManagerComponent;
  let fixture: ComponentFixture<MediaManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
