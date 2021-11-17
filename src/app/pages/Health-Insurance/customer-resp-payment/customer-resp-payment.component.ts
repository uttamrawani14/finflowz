import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { PaymentSuccessComponent } from '../../payment-success/payment-success.component';

@Component({
  selector: 'app-customer-resp-payment',
  templateUrl: './customer-resp-payment.component.html',
  styleUrls: ['./customer-resp-payment.component.css']
})
export class CustomerRespPaymentComponent implements OnInit {

  amount:number
  constructor( private common:CommonServiceService,private dialog:MatDialog) 
  {
this.amount=this.common.amount
  }

  ngOnInit(): void {
  }

  OipaDataPost()
  {
    let dialogRef = this.dialog.open(PaymentSuccessComponent, {
      height:'380px',
      width:'410px',
    });
  }

}
