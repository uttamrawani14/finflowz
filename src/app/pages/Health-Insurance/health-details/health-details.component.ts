import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { OipaService } from 'src/app/service/oipa.service';


interface residenceCountry {
  value: string;
  viewValue: string;
}

interface gender {
  value: string;
  viewValue: string;
}

interface prefix {
  value: string;
  viewValue: string;
}

interface status {
  value: string;
  viewValue: string;
}


interface alcohol {
  value: string;
  viewValue: string;
}

interface smoking {
  value: string;
  viewValue: string;
}

interface tobacoo {
  value: string;
  viewValue: string;
}

interface otherinsurance {
  value: string;
  viewValue: string;
}

interface income {
  value: string;
  viewValue: string;
}

interface salary {
  value: string;
  viewValue: string;
}

interface designation {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-health-details',
  templateUrl: './health-details.component.html',
  styleUrls: ['./health-details.component.css']
})
export class HealthDetailsComponent implements OnInit {

  personage: number
  

  residenceCountrys: residenceCountry[] = [
    // { value: '02', viewValue: 'United States Of America' },
    { value: 'IND', viewValue: 'India' },
  ];

  genders: gender[] = [
    { value: '01', viewValue: 'Male' },
    { value: '02', viewValue: 'Female' },
    { value: '03', viewValue: 'Unisex' },
  ];

  prefixs: prefix[] = [
    { value: '01', viewValue: 'Mr' },
    { value: '02', viewValue: 'Mrs' },
    { value: '03', viewValue: 'Ms' },
  ];

  statuss: status[] = [
    { value: '01', viewValue: 'Married' },
    { value: '02', viewValue: 'Single' },
  ];

  
  

  alcohols: alcohol[] = [
    { value: '01', viewValue: 'Yes' },
    { value: '02', viewValue: 'No' },
  ];

  smokings: smoking[] = [
    { value: '01', viewValue: 'Yes' },
    { value: '02', viewValue: 'No' },
  ];

  tobacoos: tobacoo[] = [
    { value: '01', viewValue: 'Yes' },
    { value: '02', viewValue: 'No' },
  ];

  otherinsurances: otherinsurance[] = [
    { value: '01', viewValue: 'Yes' },
    { value: '02', viewValue: 'No' },
  ];

  Income: income[] = [
    { value: '01', viewValue: 'Salaried (Govt)' },
    { value: '02', viewValue: 'Salaried (Non -Govt)' },
    { value: '03', viewValue: 'Business' },
    { value: '04', viewValue: 'Student' },
    { value: '05', viewValue: 'House wife' },
    { value: '06', viewValue: 'Umemployed' },
  ];
  Designation: designation[] = [
    { value: '01', viewValue: 'IT/ITES' },
    { value: '02', viewValue: 'Sales/Marketing' },
    { value: '03', viewValue: 'Defence/Army' },
    { value: '04', viewValue: 'Oil and Natural gas' },
    { value: '05', viewValue: 'Merchant Marine' },
    { value: '06', viewValue: 'Mining' }, 
    { value: '07', viewValue: 'Others' },   
  ];

  Salary: salary[] = [
    { value: '01', viewValue: '2 Lakh - 5 Lakh' },
    { value: '02', viewValue: '6 Lakh - 10 Lakh' },
    { value: '03', viewValue: '11 Lakh - 25 Lakh' },
    { value: '04', viewValue: 'None' }

  ];

  app: string = ''
  h1_value:string=''
  h1_viewvalue:string=''
  h2_value:string=''
  h2_viewvalue:string=''
  h3_value:string=''
  h3_viewvalue:string=''
  addmorenom1:boolean=false;
  postData = {
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
      "transactionDateTime": "2021-06-18 20:25:49.343",
      "offlineRequest": false,
      "location": "13.0237996,77.597077"
    },
    "workflowModel": {
      "userAction": "StartTransaction"
    }
  }
  url = `http://10.20.3.3:3005/finfra-workflow-ms/transaction/startNewTransaction`;
  json: any = {};

  constructor(private http: HttpClient ,private router: Router, private oipa: OipaService,private route:ActivatedRoute ,private common:CommonServiceService) {
    this.http.post(this.url, this.postData).toPromise().then((data: any) => {
      this.json = data;
      this.app = data.headerModel.additionalHeaders.transactionReferenceNumber;
      console.log(this.app)
      this.user.trn=this.app
    });
  }

  public user = {
    Type: { value: '', viewValue: '' },
    ResidenceCountry: { value: '', viewValue: '' },
    prefix: { value: '', viewValue: '' },
    firstName: '',
    lastName: '',
    gender: { value: '', viewValue: '' },
    email: '',
    dob: '',
    stauts: { value: '', viewValue: '' },
    country: { value: '', viewValue: '' },
    citizenshipCountry: { value: '', viewValue: '' },
    mobile: '',
    age: '',
    height:"180",
    weight: " 81",
    bmi: "25.00",
    idtype: 'Passport',
    idnum: 'CD912SBMNM76A',
    alcohol: { value: '', viewValue: '' },
    smoking: { value: '', viewValue: '' },
    tobacco: { value: '', viewValue: '' },
    otherinsurance: { value: '', viewValue: '' },
    income: { value: '', viewValue: '' },
    salaryrange: { value: '', viewValue: '' },
    designation: { value: '', viewValue: '' },
    Health1:{ value: this.h1_value, viewValue: this.h1_viewvalue },
    Health2:{ value: this.h2_value, viewValue: this.h2_viewvalue },
    Health3:{ value: this.h3_value, viewValue: this.h3_viewvalue },
    trn:this.app,
    si:null,
    CompanyGuid:'AC474AEC-3103-496C-A9C3-50F316E1BDE5',
    clientGuid:'',
    term_duration: { value: '', viewValue: '' },
    pay_duration: { value: '', viewValue: '' },
    premium: { value: 0, viewValue: 'INR' },
    AnnualPremium:0,
    planId: '',
    planName:''

  }

  data:any
  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      console.log(params)
      this.data=JSON.parse(atob(params.data))
      console.log(this.data)
      this.user.age=this.data.age
      this.user.dob=this.data.dob
      this.user.email=this.data.email
      this.user.mobile=this.data.mobile
      this.user.si=this.data.si
      this.user.pay_duration.value=this.data.pay_duration.value
      this.user.pay_duration.viewValue=this.data.pay_duration.viewValue
      this.user.term_duration.value=this.data.term_duration.value
      this.user.term_duration.viewValue=this.data.term_duration.viewValue
      this.user.premium.value=this.data.premium.value
      this.user.premium.viewValue=this.data.premium.viewValue
      this.user.AnnualPremium=this.data.AnnualPremium
      this.user.planId=this.data.planId
      this.user.planName=this.data.planName
    })
  }

  formSubmit() {
    var datebirth = this.user.dob + "T00:00:00Z";
 
    let postData = {
      "clients": [{
        "dateOfBirth": datebirth, "companyName": null, "textField1": this.user.mobile, "email": this.user.email, "prefix": this.user.prefix.value, "sex": this.user.gender.value, "suffix": null, "legalResidenceCountryCode":"IND", "title": null, "maritalStatus": this.user.stauts.value, "entityTypeCode": "CLIENT", "addresses": [], "phones": [], "firstName": this.user.firstName, "lastName": this.user.lastName,  "type": "02", "taxIdType": null, "status": "Active", "companyId": "EFA66171-7BE8-42EC-8DE6-EEC7C7D4C2E2", "IdNumber": this.user.idnum, "Height": this.user.height, "Age": this.user.age.toString(), "Weight": this.user.weight, "Bmi": this.user.bmi, "IdType": this.user.idtype,
        "SourceOfIncome":
        {
          "textValue": this.user.income.value,
          "optionText": this.user.income.viewValue
        },
        "SalaryRange":
        {
          "textValue": this.user.salaryrange.value,
          "optionText": this.user.salaryrange.viewValue
        },
        "Profession":
        {
          "textValue": this.user.designation.value,
          "optionText": this.user.designation.viewValue
        }
        ,
        "Alcohol": {
          "textValue": this.user.alcohol.value,
          "optionText": this.user.alcohol.viewValue
        }, "Smoking": {
          "textValue": this.user.smoking.value,
          "optionText": this.user.smoking.viewValue
        },
        "Tobacco": {
          "textValue": this.user.tobacco.value,
          "optionText": this.user.tobacco.viewValue
        },
        "OtherInsurance": {
          "textValue": this.user.otherinsurance.value,
          "optionText": this.user.otherinsurance.viewValue
        },
        "Surgeries": {"textValue": this.h1_value,"optionText": this.h1_viewvalue},"MedicalHistory": {"textValue": this.h2_value,"optionText": this.h2_viewvalue},"Medication": {"textValue": this.h3_value,"optionText": this.h3_viewvalue},
      }]
    }
    this.oipa.oipaPostClient(postData).subscribe(
      (data: any) => {
        console.log(data.clients[0])
        this.common.clientGuid=data.clients[0]
      },
      (error) => {
        console.log(error);
        alert('something went wrong');
      }
    );
    console.log(postData.clients[0])
    let data: any = this.user
    console.log(data)
    this.router.navigate(['payment'], {
      queryParams: { data: btoa(JSON.stringify(data))
       }
    });
  }

  

 

  validatedBmi(event) {
    this.calbmi()
  }

  calbmi() {
    // var height = (this.user.height/100) * (this.user.height/100)
    // var weight = this.user.weight
    // var bmi = weight / height;
    // var n = bmi.toFixed(2);
    // this.user.bmi = n
  }

  addmore2()
    {
      this.addmorenom1=true;
    }
    addmore3()
    {
      this.addmorenom1=false;
      this.h1_value="N"
      this.h1_viewvalue="No"
      this.h2_value="N"
      this.h2_viewvalue="No"
      this.h3_value="N"
      this.h3_viewvalue="No"
    }
   
    radioChangeHealth1(e)
    {
      console.log(e.value) 
      if (e.value == 'Y') {
        this.h1_value='Y'
        this.h1_viewvalue = 'Yes'
      }
      else{
        this.h1_value='N'
        this.h1_viewvalue = 'No'
      }
    }

    radioChangeHealth2(e)
    {
      console.log(e.value) 
      if (e.value == 'Y') {
        this.h2_value='Y'
        this.h2_viewvalue = 'Yes'
      }
      else{
        this.h2_value='N'
        this.h2_viewvalue = 'No'
      }
    }
    
    radioChangeHealth3(e)
    {
      console.log(e.value) 
      if (e.value == 'Y') {
        this.h3_value='Y'
        this.h3_viewvalue = 'Yes'
      }
      else{
        this.h3_value='N'
        this.h3_viewvalue = 'No'
      }
    }

    



}





