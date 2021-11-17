import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-generate-qoute-number',
  templateUrl: './generate-qoute-number.component.html',
  styleUrls: ['./generate-qoute-number.component.css']
})
export class GenerateQouteNumberComponent implements OnInit {

  QuoteNumber:string=''
  constructor(private common:CommonServiceService) 
  {
this.QuoteNumber=this.common.trn
   }

  ngOnInit(): void {
  }

}
