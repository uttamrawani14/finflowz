import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateQouteNumberComponent } from './generate-qoute-number.component';

describe('GenerateQouteNumberComponent', () => {
  let component: GenerateQouteNumberComponent;
  let fixture: ComponentFixture<GenerateQouteNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateQouteNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateQouteNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
