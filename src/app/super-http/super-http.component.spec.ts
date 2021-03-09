import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHttpComponent } from './super-http.component';

describe('SuperHttpComponent', () => {
  let component: SuperHttpComponent;
  let fixture: ComponentFixture<SuperHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
