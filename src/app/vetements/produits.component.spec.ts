import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetementsComponent } from './vetements.component';

describe('VetementsComponent', () => {
  let component: VetementsComponent;
  let fixture: ComponentFixture<VetementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VetementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VetementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
