import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { OipaService } from 'src/app/service/oipa.service';

@Component({
  selector: 'app-customer-response',
  templateUrl: './customer-response.component.html',
  styleUrls: ['./customer-response.component.css']
})
export class CustomerResponseComponent implements OnInit {

  trn1: string;
  issueDate: string = ''

  getTransactionurl = `http://10.20.3.3:3005/finfra-workflow-ms/transaction/getTransactionDetails`;
  postData3: { headerModel: { userId: number; language: string; legalEntityId: number; legalEntityCode: string; branchCode: string; functionId: string; applicationId: string; applicationDate: string; sourceSystemUserId: string; userAgent: string; versionNo: string; transactionDateTime: string; offlineRequest: boolean; location: string; additionalHeaders: { transactionReferenceNumber: string; applicationReferenceNumber: string; }; }; pageModel: { currentPageNumber: number; recordsPerPage: number; totalRecords: number; }; workflowModel: { stageId: string; userAction: string; }; finData: { transactionReferenceNumber: string; applicationReferenceNumber: string; referenceNumbers: { transactionReferenceNumber: string; applicationReferenceNumber: string; }; }; };
  json: any = {};
  postData1: { headerModel: { userId: number; language: string; legalEntityId: number; legalEntityCode: string; branchCode: string; functionId: string; applicationId: string; applicationDate: string; sourceSystemUserId: string; userAgent: string; versionNo: string; transactionDateTime: string; offlineRequest: boolean; location: string; additionalHeaders: { transactionReferenceNumber: string; applicationReferenceNumber: string; }; }; workflowModel: { stageId: string; userAction: string; }; finData: { transactionReferenceNumber: string; applicationReferenceNumber: string; referenceNumbers: { transactionReferenceNumber: string; applicationReferenceNumber: string; }; age: number;customer_response:string; }; };
  // trn1:string;
  age1: number;
  trn2: string = '';
  private routeSub: Subscription;

  firstFormGroup: FormGroup;
  age: number;
  customer_name: string;
  premium: string;
  customer_email: string;
  payable_amount: number;
  updatedPremium: string;
  gender: string;
  pname: string;
  ptype: string;
  title: string;
  customer_middleName: string;
  customer_lastname: string;
  idname: string;
  height: string;
  weight: string;
  bmi: string
  marital_status: string
  planName: string;
  planType: string;
  insName: string;
  insType: string;
  insAdd: string;
  pregnancy: boolean;
  pregnancy1: string;
  roomRent: boolean;
  roomRent1: string;
  idnumber: string;
  mobile: string;
  suminsured: string;
  policyPeriod: string;
  duration: string;
  paymentmod: string;
  policyId: string;
  planid: string;
  clientGUID: string

  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private common: CommonServiceService,
    public dialog: MatDialog,
    private oipa: OipaService
  ) {
    this.routeSub = this.activatedRoute.queryParams.subscribe(params => {
      console.log(params)
      this.trn1 = params.trn;
      this.common.trn=params.trn
      this.age1 = params.age;
      console.log(this.trn1);
      this.getTrn();
      this.getPostData();
      var todayDate = new Date().toISOString().slice(0, 10);
      var ISDate = todayDate + "T00:00:00Z"
      this.issueDate = ISDate
    });

  }
  getTrn() {
    this.postData4.headerModel.additionalHeaders.transactionReferenceNumber = this.trn1;
    this.trn2 = this.postData4.headerModel.additionalHeaders.transactionReferenceNumber;
    console.log(this.trn2);

  }
  getPostData() {
    console.log('Hello');
    this.http.post(this.getTransactionurl, this.postData4).toPromise().then((data: any) => {
      console.log(data.finData.businessData);
      this.json = data;
      this.customer_name = data.finData.businessData.customer_name;
      this.customer_email = data.finData.businessData.customer_email;
      this.gender = data.finData.businessData.Gender.viewValue;
      this.pname = data.finData.businessData.planName;
      this.ptype = data.finData.businessData.planType;
      this.updatedPremium = data.finData.businessData.updatedPremium;
      this.title = data.finData.businessData.title.viewValue;
      this.customer_middleName = data.finData.businessData.customer_middleName;
      this.customer_lastname = data.finData.businessData.customer_lastname;
      this.idname = data.finData.businessData.id;
      console.log(this.idname);
      this.idnumber = data.finData.businessData.idnumber;
      this.height = data.finData.businessData.height;
      this.weight = data.finData.businessData.weight;
      this.bmi = data.finData.businessData.bmi;
      this.mobile = data.finData.businessData.mobile;
      this.planName = data.finData.businessData.planName.viewValue;
      this.premium = data.finData.businessData.premium;
      this.planType = data.finData.businessData.planType;
      this.insName = data.finData.businessData.insName;
      this.insType = data.finData.businessData.insType;
      this.insAdd = data.finData.businessData.insAdd;
      this.payable_amount =  data.finData.businessData.updatedPremium - data.finData.businessData.premium;
      // this.pregnancy = data.finData.businessData.addAndUpdate.pregnancy;
      // this.roomRent = data.finData.businessData.addAndUpdate.roomRent;
      this.suminsured = data.finData.businessData.sumInsured;
      this.policyPeriod = data.finData.businessData.policyPeriod.value
      this.duration = data.finData.businessData.policyPeriod.viewValue
      this.paymentmod = data.finData.businessData.paymentMode.viewValue
      console.log(data.finData.businessData.paymentMode.viewValue)
      this.policyId = data.finData.businessData.policyId
      // this.common.policies = this.trn2
      this.planid = data.finData.businessData.planName.value
      this.clientGUID = data.finData.businessData.clientGUID
      console.log(this.clientGUID)

      if (this.pregnancy == false || this.roomRent == false) {
        this.pregnancy1 = "Not Covered",
          this.roomRent1 = "Not Covered"
      }
      else {
        this.pregnancy1 = "Covered"
      }
    });
  }

  postData4 = {
    "headerModel": {
      "userId": 114,
      "language": "en",
      "legalEntityId": 1,
      "legalEntityCode": "1001",
      "branchCode": "001",
      "functionId": "HealthonBoarding",
      "applicationId": "finflowz-customerservice",
      "applicationDate": "2021-08-03",
      "sourceSystemUserId": "SWAGATIKARM",
      "userAgent": "browser",
      "versionNo": "20.4.0-0.0",
      "transactionDateTime": "2021-08-03 11:55:06.681",
      "offlineRequest": false,
      "location": "12.961464699999999,77.7108574",
      "additionalHeaders": {
        "transactionReferenceNumber": this.trn2
      }
    },
    "pageModel": {
      "currentPageNumber": 1,
      "recordsPerPage": 1,
      "totalRecords": 1
    },
    "workflowModel": {
      "stageId": "counterOfferDecision"
    }

  }
  ngOnInit(): void {
  }



  // call(){
  //   this.payable_amount=parseInt(this.updated_counter_offer)-parseInt(this.counter_offer)
  //   console.log(this.payable_amount);
  // }
  // openDialog() {
  //   let dialogRef=this.dialog.open(DialogComponent,{
  //     height:'310px',
  //     width:'370px',
  //   });
  // }

  mv() {
    // this.common.inputPremium=this.payable_amount;
    // this.get();
    console.log(this.payable_amount);
    // this.openDialog();
  }
  moveTransaction1() {
    // this.common.inputPremium=this.payable_amount;
    console.log(this.payable_amount);
    // this.openDialog();

    let url1 = `http://10.20.3.3:3005/finfra-workflow-ms/transaction/moveTransactionToNextStage`;
    this.postData1 = {
      "headerModel": {
        "userId": 111,
        "language": "en",
        "legalEntityId": 1,
        "legalEntityCode": "1001",
        "branchCode": "001",
        "functionId": "HealthonBoarding",
        "applicationId": "finflowz-customerservice",
        "applicationDate": "2019-05-01",
        "sourceSystemUserId": "GOURANGAKUNDU",
        "userAgent": "browser",
        "versionNo": "20.4.0-0.0",
        "transactionDateTime": "2021-06-18 20:25:49",
        "offlineRequest": false,
        "location": "13.0237996,77.597077",
        "additionalHeaders": {
          "transactionReferenceNumber": this.trn1,
          "applicationReferenceNumber": this.trn1
        }
      },
      "workflowModel": {
        "stageId": "counterOfferDecision",
        "userAction": "accepted"
      },
      "finData": {
        "transactionReferenceNumber": this.trn1,
        "applicationReferenceNumber": this.trn1,
        "referenceNumbers": {
          "transactionReferenceNumber": this.trn1,
          "applicationReferenceNumber": this.trn1
        },
        "customer_response":"accepted",
        "age": this.age1
      }

    }
    this.http.post(url1, this.postData1).toPromise().then((data: any) => {
      console.log(data);
      this.json = data.json;
    });
  }
  moveTransaction2() {
    let url1 = `http://10.20.3.3:3005/finfra-workflow-ms/transaction/moveTransactionToNextStage`;
    this.postData1 = {
      "headerModel": {
        "userId": 111,
        "language": "en",
        "legalEntityId": 1,
        "legalEntityCode": "1001",
        "branchCode": "001",
        "functionId": "HealthonBoarding",
        "applicationId": "finflowz-customerservice",
        "applicationDate": "2019-05-01",
        "sourceSystemUserId": "GOURANGAKUNDU",
        "userAgent": "browser",
        "versionNo": "20.4.0-0.0",
        "transactionDateTime": "2021-06-18 20:25:49",
        "offlineRequest": false,
        "location": "13.0237996,77.597077",
        "additionalHeaders": {
          "transactionReferenceNumber": this.trn1,
          "applicationReferenceNumber": this.trn1
        }
      },
      "workflowModel": {
        "stageId": "counterOfferDecision",
        "userAction": "rejected"
      },
      "finData": {
        "transactionReferenceNumber": this.trn1,
        "applicationReferenceNumber": this.trn1,
        "referenceNumbers": {
          "transactionReferenceNumber": this.trn1,
          "applicationReferenceNumber": this.trn1
        },
        "customer_response":"rejected",
        "age": this.age1
      }
    }
    this.http.post(url1, this.postData1).toPromise().then((data: any) => {
      console.log(data);
      this.json = data.json;
    });
  }

  updatepolicy() {
    let putpolicy = {
      "policy": {
        "companyId": "AC474AEC-3103-496C-A9C3-50F316E1BDE5",
        "issueStateCode": "03",
        "planDate": "2015-08-04T00:00:00Z",
        "planId": this.planid,
        "policyId": this.policyId,
        "policyName": this.trn1,
        "policyNumber": this.trn1,
        "status": "53",
        "systemCode": "01"
      }
    }
    console.log(putpolicy);

    this.oipa.updatePolicy(putpolicy, this.policyId).subscribe(
      (data: any) => {
        console.log(putpolicy)
        console.log(this.policyId)
        console.log(data)
        this.moveTransaction2()
      },
      (error) => {
        console.log(error);
        alert('something went wrong');
      })
  }

  updatepolicy1() {
    let putpolicy = {
      "policy": {
        "companyId": "AC474AEC-3103-496C-A9C3-50F316E1BDE5",
        "issueStateCode": "03",
        "IssueDate": this.issueDate,
        "planDate": "2015-08-04T00:00:00Z",
        "planId": this.planid,
        "policyId": this.policyId,
        "policyName": this.trn1,
        "policyNumber": this.trn1,
        "status": "01",
        "systemCode": "01"
      }
    }
    console.log(putpolicy);
    this.oipa.updatePolicy(putpolicy, this.policyId).subscribe(
      (data: any) => {
        console.log(putpolicy)
        console.log(this.policyId)
        console.log(data)
        this.Trn()
        this.moveTransaction1()
        this.common.amount=this.payable_amount,
        this.router.navigate(["/Customer-resp-Payment"]);
      },
      (error) => {
        console.log(error);
        alert('something went wrong');
      })
  }


  Trn() {
    let oipatrn = {
      "guidClient": this.clientGUID,
      "value": "Yes",
      "typeCode": "02",
      "optionTextFlag": "1",
      "optionText": "Check",
      "name": this.customer_name,
      "polNumber": this.trn1,
      "paymentAmount": this.payable_amount
    }
console.log(oipatrn)
    this.oipa.oipaTrn(oipatrn).subscribe(data => {
      console.log(data);
    })
  }



}
