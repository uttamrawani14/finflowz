import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { GeneratePolicyNumberComponent } from '../generate-policy-number/generate-policy-number.component';
import { GenerateQouteNumberComponent } from '../generate-qoute-number/generate-qoute-number.component';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {

  risk:string=''
  constructor(private dialog:MatDialog,private common:CommonServiceService) 
  {
this.risk=this.common.risk;
   }

  ngOnInit(): void {
  }

  close()
  {
    // let dialogRef=this.dialog.open(GeneratePolicyNumberComponent,{
    //   height:'380px',
    //   width:'410px',
    // });
    if(this.risk=='bad')
    {
      let dialogRef=this.dialog.open(GenerateQouteNumberComponent,{
        height:'400px',
        width:'410px',
      });
    }
    else{
      let dialogRef=this.dialog.open(GeneratePolicyNumberComponent,{
        height:'380px',
        width:'410px',
      });
    }
   


  }

}
