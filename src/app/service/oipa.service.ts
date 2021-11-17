import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
let username = 'sladmin'
let password = 'sladmin123'
let authorizationData = 'Basic ' + btoa(username + ':' + password);

const headerOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': authorizationData
  })
};

@Injectable({
  providedIn: 'root'
})
export class OipaService {

  constructor(private httpClient: HttpClient) { }

  //Fetch OIPA Plan Using ProductGUID
  oipaCompanyPlans(id:string) :Observable<any> {
    return this.httpClient.get<any>('http://10.20.22.2:7006/PASService/rest/services/products/'+id+'/plans',headerOptions)
  }

  oipaPost(user: any) {
    return this.httpClient
      .post('http://10.20.22.2:7006/PASService/rest/services/policies', user,headerOptions)
  }

  //POST Data in DMN and get AGEGROUP
  agegroupproduct(user: any) {
    return this.httpClient
      .post('http://10.20.3.3:8030/engine-rest/decision-definition/key/AgeGroupProduct/evaluate', user)
  }

  rateValue(user: any) {
    return this.httpClient
      .post('http://10.20.3.3:8030/engine-rest/decision-definition/key/RateValues/evaluate', user)
  }

  //POST data OIPA CLIENT
  oipaPostClient(user: any) {
    return this.httpClient
      .post('http://10.20.22.2:7006/PASService/rest/services/clients/', user,headerOptions)
  }

  //Risk handler
  verify(user: any) {
    return this.httpClient
      .post('http://10.20.3.3:8030/engine-rest/decision-definition/key/RiskHandler/evaluate', user)
  }

  oipaTrn(user: any) {
    return this.httpClient
      .post('http://localhost:8009/insurance/asFileRequest', user)
  }

  oipaCase(user: any) {
    return this.httpClient
      .post('http://10.20.22.2:7006/PASService/rest/services/cases', user,headerOptions)
  }

  oipaSegment(data:any,id:string) :Observable<any>
  {
    return this.httpClient.post<any>('http://10.20.22.2:7006/PASService/rest/services/policies/'+id+'/segments',data,headerOptions)
  }

  updatePolicy(data,id:string)
  {
    return this.httpClient.put('http://10.20.22.2:7006/PASService/rest/services/policies/'+id, data, headerOptions)
  }
}
