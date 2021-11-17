import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor() { }

  clientGuid:''
  risk:''
  trn:''
  amount:number
}
