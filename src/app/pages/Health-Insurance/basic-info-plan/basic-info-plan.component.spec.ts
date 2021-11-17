import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoPlanComponent } from './basic-info-plan.component';

describe('BasicInfoPlanComponent', () => {
  let component: BasicInfoPlanComponent;
  let fixture: ComponentFixture<BasicInfoPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInfoPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
