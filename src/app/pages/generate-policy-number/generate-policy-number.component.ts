import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-generate-policy-number',
  templateUrl: './generate-policy-number.component.html',
  styleUrls: ['./generate-policy-number.component.css']
})
export class GeneratePolicyNumberComponent implements OnInit {

  PolicyNumber:string=''
  constructor(private common:CommonServiceService) 
  {
this.PolicyNumber=this.common.trn
   }

  ngOnInit(): void {
  }

}
