import { ComponentFixture, TestBed } from '@angular/core/testing';

import {VetementComponent } from './vetement.component';

describe('ProduitsComponent', () => {
  let component: VetementComponent;
  let fixture: ComponentFixture<VetementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VetementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VetementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
