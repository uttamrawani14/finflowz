import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRespPaymentComponent } from './customer-resp-payment.component';

describe('CustomerRespPaymentComponent', () => {
  let component: CustomerRespPaymentComponent;
  let fixture: ComponentFixture<CustomerRespPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRespPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRespPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
