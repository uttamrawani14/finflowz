import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { OipaService } from 'src/app/service/oipa.service';
import { PaymentSuccessComponent } from '../payment-success/payment-success.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  policyNumber: string = ''
  issueDate: string = ''
  caseName: string = ''
  caseNumber: string = ''
  json: any = {};
  SI: number
  postData1: {
    headerModel: { userId: number; language: string; legalEntityId: number; legalEntityCode: string; branchCode: string; functionId: string; applicationId: string; applicationDate: string; sourceSystemUserId: string; userAgent: string; versionNo: string; transactionDateTime: string; offlineRequest: boolean; location: string; additionalHeaders: { transactionReferenceNumber: string; applicationReferenceNumber: string; }; }; workflowModel: { stageId: string; userAction: string; }; finData: {
      transactionReferenceNumber: string; applicationReferenceNumber: string; referenceNumbers: { transactionReferenceNumber: string; applicationReferenceNumber: string; }; age: number; customer_name: string; customer_lastname: string; customer_email: string; risk: string; trn: string;
      title: { value: string, viewValue: string }; marital_status: { value: string, viewValue: string };
      id: string; idnumber: string; height: string, weight: string, bmi: string, mobile: string;
      smoking: { value: string, viewValue: string };
      tobacco: { value: string, viewValue: string };
      drinking: { value: string, viewValue: string };
      otherInsurance: { value: string, viewValue: string };
      planName: { value: string, viewValue: string };
      insType: string;
      policyId: string;
      premium: string;
      sumInsured: string;
      paymentMode: { value: string, viewValue: string };
      policyPeriod: { value: string, viewValue: string };
      companyId: string;
      clientGUID: string;
      SourceOfIncome: { value: string, viewValue: string };
      SalaryRange: { value: string, viewValue: string };
      Profession: { value: string, viewValue: string };
      Gender: { value: string, viewValue: string };
      issueStateCode: string;
      planDate: string;
      systemCode: string;
      policyName: string;
      policyNumber: string,
      planId: string
    };
  };
  constructor(public http:HttpClient, private dialog: MatDialog, private oipa: OipaService,private route: ActivatedRoute,private common:CommonServiceService) {
    var todayDate = new Date().toISOString().slice(0, 10);
    var ISDate = todayDate + "T00:00:00Z"
    this.issueDate = ISDate
    console.log(todayDate);
    var num = "Case-" + todayDate + "-" + Math.floor(10000 + Math.random() * (913755 / 5));
    var num1 = "Fin-" + todayDate + "-" + Math.floor(10000 + Math.random() * (172345 / 7));
    this.caseName = num1
    this.caseNumber = num
    console.log(num);
    console.log(num1);
  }
  data: any
  risk:string=''
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params)
      this.data = JSON.parse(atob(params.data))
      console.log(this.data)
      this.CalculateRisk();
    })
    console.log(this.data.trn)
    this.common.trn=this.data.trn
  }
  moveTransaction() {
    let url1 = `http://10.20.3.3:3005/finfra-workflow-ms/transaction/moveTransactionToNextStage`;
    this.postData1 = {
      "headerModel": {
        "userId": 1104,
        "language": "en",
        "legalEntityId": 1,
        "legalEntityCode": "1001",
        "branchCode": "001",
        "functionId": "HealthonBoarding",
        "applicationId": "finflowz-customerservice",
        "applicationDate": "2019-05-01",
        "sourceSystemUserId": "UTTAMKUMAR",
        "userAgent": "browser",
        "versionNo": "20.4.0-0.0",
        "transactionDateTime": "2021-06-18 20:25:49",
        "offlineRequest": false,
        "location": "13.0237996,77.597077",
        "additionalHeaders": {
          "transactionReferenceNumber":this.data.trn,
          "applicationReferenceNumber":this.data.trn
        }
      },
      "workflowModel": {
        "stageId": "retriveRisk",
        "userAction": "submit"
      },
      "finData": {
        "transactionReferenceNumber":this.data.trn,
        "applicationReferenceNumber":this.data.trn,
        "referenceNumbers": {
          "transactionReferenceNumber":this.data.trn,
          "applicationReferenceNumber":this.data.trn
        },
        "trn":this.data.trn,
        "title": { value: this.data.prefix.value, viewValue: this.data.prefix.viewValue },
        "customer_name": this.data.firstName,
        "customer_lastname": this.data.lastName,
        "customer_email": this.data.email,
        "age": this.data.age,
        "risk":  this.risk,
        "marital_status": { value: this.data.stauts.value, viewValue: this.data.stauts.viewValue },
        "id": this.data.idtype,
        "idnumber": this.data.idnum,
        "height": this.data.height,
        "weight": this.data.weight,
        "bmi": this.data.bmi,
        "mobile": this.data.mobile,
        "smoking": { value: this.data.smoking.value, viewValue: this.data.smoking.viewValue },
        "tobacco": { value: this.data.tobacco.value, viewValue: this.data.tobacco.viewValue },
        "drinking": { value: this.data.alcohol.value, viewValue: this.data.alcohol.viewValue },
        "otherInsurance": { value: this.data.otherinsurance.value, viewValue: this.data.otherinsurance.viewValue },
        "planName": { value: this.data.planId, viewValue: this.data.planName },
        "insType": "individual",
        "policyId": this.policyNumber,
        "premium": this.data.premium.value,
        "sumInsured": this.data.si,
        "paymentMode": { value: this.data.pay_duration.value, viewValue: this.data.pay_duration.viewValue },
        "policyPeriod": { value: this.data.term_duration.value, viewValue: this.data.term_duration.viewValue },
        "companyId": this.data.CompanyGuid,
        "clientGUID": this.common.clientGuid,
        "SourceOfIncome": { value: this.data.income.value, viewValue: this.data.income.viewValue },
        "SalaryRange": { value: this.data.salaryrange.value, viewValue: this.data.salaryrange.viewValue },
        "Profession": { value: this.data.designation.value, viewValue: this.data.designation.viewValue },
        "Gender": { value: this.data.gender.value, viewValue: this.data.gender.viewValue },
        "issueStateCode": "03",
        "planDate": "2015-08-04T00:00:00Z",
        "systemCode": "01",
        "policyName": this.data.trn,
        "policyNumber": this.data.trn,
        "planId": this.data.planId,
      }
    }
    this.http.post(url1, this.postData1).toPromise().then((data: any) => {
      console.log(data);
      this.json = data.json;
    },
      (error) => {
        console.log(error);
        alert('something went wrong');
      }
    )
  };

  

  OipaDataPost() {
    if ( this.risk == "bad") {
      console.log("bad")
      let postData = {
        "policies": [
          {
            "multiFields": {},
            "policyName":this.data.trn,
            "policyNumber":this.data.trn,
            "planDate": "2015-08-04T00:00:00Z",
            "AppSignDate": this.issueDate,
            "issueStateCode": "03",
            "systemCode": "01",
            "segments": [],
            "roles": [
              {
                "multiFields": {},
                "codes": [
                  {
                    "codeName": "AsCodeRole",
                    "codeValue": "01",
                    "longDescription": "Owner",
                    "shortDescription": "Owner"
                  },
                  {
                    "codeName": "AsCodeRoleStatus",
                    "codeValue": "01",
                    "longDescription": "Active",
                    "shortDescription": "Active"
                  }
                ],
                "roleAmount": null,
                "rolePercent": 100.0,
                "stateCode": null,
                "clientId": this.common.clientGuid,
                "externalclientId": null,
                "companyId": null,
                "percentDollar": null,
                "role": "01",
                "segmentId": null,
                "status": "01"
              }
            ],
            "creationDate": "2015-08-04T00:00:00Z",
            "updatedDate": "2020-01-21T06:56:54Z",
            "companyId": this.data.CompanyGuid,
            "planId": this.data.planId,
            "status": "08",
            "SumInsured": {
              "value": parseInt(this.data.si),
              "currency": "INR"
            },
            "AnnualPremium": {
              "value": this.data.AnnualPremium,
              "currency": "INR"
            },
            "Premium": {
              "value": this.data.premium.value,
              "currency": "INR"
            },
            "PolicyPeriod": {
              "textValue": this.data.term_duration.value,
              "optionText": this.data.term_duration.viewValue
            },
            "PaymentMode": {
              "textValue": this.data.pay_duration.value,
              "optionText": this.data.pay_duration.viewValue
            }
          }
        ]
      }
    console.log(postData);
      this.oipa.oipaPost(postData).subscribe(
        (data: any) => {
          this.policyNumber = data.policies[0];
          console.log("PolicyGuid :" + this.policyNumber)
          this.segemt();
          this.openPopUp();
          this.moveTransaction();
          this.Case();
        },
        (error) => {
          console.log(error);
          alert('something went wrong');
        }
      );
      console.log(postData)
    }


    else {
      console.log("good")
      let postData = {
        "policies": [
          {
            "multiFields": {},
            "policyName": this.data.trn,
            "policyNumber": this.data.trn,
            "planDate": "2015-08-04T00:00:00Z",
            "IssueDate": this.issueDate,
            "AppSignDate": this.issueDate,
            "issueStateCode": "03",
            "systemCode": "01",
            "segments": [],
            "roles": [
              {
                "multiFields": {},
                "codes": [
                  {
                    "codeName": "AsCodeRole",
                    "codeValue": "01",
                    "longDescription": "Owner",
                    "shortDescription": "Owner"
                  },
                  {
                    "codeName": "AsCodeRoleStatus",
                    "codeValue": "01",
                    "longDescription": "Active",
                    "shortDescription": "Active"
                  }
                ],
                "roleAmount": null,
                "rolePercent": 100.0,
                "stateCode": null,
                "clientId": this.common.clientGuid,
                "externalclientId": null,
                "companyId": null,
                "percentDollar": null,
                "role": "01",
                "segmentId": null,
                "status": "01"
              }
            ],
            "creationDate": "2015-08-04T00:00:00Z",
            "updatedDate": "2020-01-21T06:56:54Z",
            "companyId": this.data.CompanyGuid,
            "planId": this.data.planId,
            "status": "01",
            "SumInsured": {
              "value": parseInt(this.data.si),
              "currency": "INR"
            },
            "AnnualPremium": {
              "value": this.data.AnnualPremium,
              "currency": "INR"
            },
            "Premium": {
              "value": this.data.premium.value,
              "currency": "INR"
            },
            "PolicyPeriod": {
              "textValue": this.data.term_duration.value,
              "optionText": this.data.term_duration.viewValue
            },
            "PaymentMode": {
              "textValue": this.data.pay_duration.value,
              "optionText": this.data.pay_duration.viewValue
            }
          }
        ]
      }
      console.log(postData);
      this.oipa.oipaPost(postData).subscribe(
        (data: any) => {
          this.policyNumber = data.policies[0];
          console.log("PolicyGuid :" + this.policyNumber)
          this.segemt();
          this.openPopUp();
          this.moveTransaction();
          this.Trn();
        },
        (error) => {
          console.log(error);
          alert('something went wrong');
        }
      );
    }
  }
  openPopUp() {
    this.data.policies =this.data.trn;
    let dialogRef = this.dialog.open(PaymentSuccessComponent, {
      height:'380px',
      width:'410px',
    });
  }



  segemt() {
    let postSegment = { "segments": [{ "policyId": this.policyNumber, "segmentNameId": "1785943B-FA38-441C-8CA4-8C833089F4DB", "status": "24", "segmentName": { "segmentName": "BaseCoverage", "activeFromDate": "2020-01-06T00:00:00Z", "activeToDate": "2040-01-06T00:00:00Z", "planSegmentName": "BaseCoverage", "segmentNameId": "1785943B-FA38-441C-8CA4-8C833089F4DB", "type": "05", "status": "01" } }] }
    this.oipa.oipaSegment(postSegment, this.policyNumber).subscribe(data => {
      console.log(data);
    });
  }

  Trn() {
    let oipatrn = {
      "guidClient": this.common.clientGuid,
      "value": "Yes",
      "typeCode": "02",
      "optionTextFlag": "1",
      "optionText": "Check",
      "name": this.data.firstName,
      "polNumber":this.data.trn,
      "paymentAmount": this.data.premium.value
    }
    console.log(oipatrn)
    this.oipa.oipaTrn(oipatrn).subscribe(data => {
      console.log(data);
    })
  }

  Trn1() {
    let oipatrn = {
      "guidClient": this.common.clientGuid,
      "value": "Yes",
      "typeCode": "02",
      "optionTextFlag": "1",
      "optionText": "Check",
      "name": this.data.firstName,
      "polNumber":this.data.trn,
      "paymentAmount": this.data.premium.value,
      "caseNumber": this.caseNumber
    }

    this.oipa.oipaTrn(oipatrn).subscribe(data => {
      console.log(data);
    })
  }

  Case() {
    let postCase = { "cases": [{ "caseName": this.caseName, "caseNumber": this.caseNumber, "creationDate": this.issueDate, "policies": [], "companyId": "EFA66171-7BE8-42EC-8DE6-EEC7C7D4C2E2", "status": "02", "updatedDateTime": this.issueDate }] }
    this.oipa.oipaCase(postCase).subscribe(data => {
      console.log(data);
      this.Trn1();
    })
  }

  CalculateRisk() {
    let postData = {
      "variables": {
        "si": { "value": this.data.si, "type": "integer" },
        "age": { "value": this.data.age, "type": "integer" }
      }
    }
    this.oipa.verify(postData).subscribe(
      (data: any) => {
        console.log("risk : " +data[0].risk.value)
        this.risk=data[0].risk.value
        this.common.risk=data[0].risk.value
      },
      (error) => {
        console.log(error);
        alert('something went wrong');
      }
    );

  }


}





