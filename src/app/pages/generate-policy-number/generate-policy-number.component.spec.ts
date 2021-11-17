import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePolicyNumberComponent } from './generate-policy-number.component';

describe('GeneratePolicyNumberComponent', () => {
  let component: GeneratePolicyNumberComponent;
  let fixture: ComponentFixture<GeneratePolicyNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratePolicyNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratePolicyNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
