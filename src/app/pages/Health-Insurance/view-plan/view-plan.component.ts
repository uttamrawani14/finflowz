import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/components/interface/Comapny';
import { Plan } from 'src/app/components/interface/Plan';
import { OipaService } from 'src/app/service/oipa.service';

interface mop {
  value: string;
  viewValue: string;
}

interface duration {
  value: string;
  viewValue: string;
}

interface ageGroup {
  value: string;
  viewValue: string;
}

interface citizenshipCountry {
  value: string;
  viewValue: string;
}

interface data0 {
  value: string;
  viewValue: string;
}
interface data1 {
  value: string;
  viewValue: string;
}
interface data2 {
  value: string;
  viewValue: string;
}
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-view-plan',
  templateUrl: './view-plan.component.html',
  styleUrls: ['./view-plan.component.css']
})
export class ViewPlanComponent implements OnInit {
  show: boolean = false; show1: boolean = true;
  planiddmn: number
  PrimumCal: number
  ids: any = [];
  suminsuredamount: number
  selecteddata: any
  rateValue: number
  AnnualPremium: number
  term_value_1: string
  term_viewValue_1: string
  durations: duration[] = [
    { value: '1', viewValue: '1 years' },
    { value: '2', viewValue: '2 years' },
    { value: '3', viewValue: '3 years' },
  ];

  mops: mop[] = [
    { value: '4', viewValue: 'Quarterly' },
    { value: '6', viewValue: 'Half Yearly' },
  ];
  datas0: data0[] = [
    { value: '300000', viewValue: '3 Lakhs' },
    { value: '400000', viewValue: '4 Lakhs' },
    { value: '500000', viewValue: '5 Lakhs' },
    { value: '600000', viewValue: '6 Lakhs' },
  ];
  datas1: data1[] = [
    { value: '300000', viewValue: '3 Lakhs' },
    { value: '400000', viewValue: '4 Lakhs' },
    { value: '500000', viewValue: '5 Lakhs' },
    { value: '600000', viewValue: '6 Lakhs' },
  ];
  datas2: data2[] = [
    { value: '700000', viewValue: '7 Lakhs' },
    { value: '800000', viewValue: '8 Lakhs' },
    { value: '1000000', viewValue: '10 Lakhs' },
    { value: '1200000', viewValue: '12 Lakhs' },
    { value: '1500000', viewValue: '15 Lakhs' },
  ];

  ageGroups: ageGroup[] = [
    { value: '01', viewValue: '<=30' },
    { value: '02', viewValue: '>=31' },
  ];
  peepsSelect: any
  RateTableID: number
  allCompany: any = [];
  allCompanyPlan: any = [];


  public comp: Company = {
    companyName: '',
    compnayId: ''
  }

  public compPlan: Plan = {
    planName: '',
    planId: ''
  }

  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog, private oipa: OipaService) {
    this.getOipaPlan();
  }
  data: any
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params)
      this.data = JSON.parse(atob(params.data))
      console.log(this.data)
      this.oipaData.age = this.data.age
      this.oipaData.type_viewValue1 = this.data.type.value
      this.oipaData.planType = this.data.planType
      this.oipaData.mobile = this.data.mobile
      this.oipaData.email = this.data.email
      this.oipaData.dob = this.data.dob
      this.oipaData.ageGroup = this.data.ageGroupdmn
    })

    
  }


  public oipaData = {
    planName: '',
    planId: '',
    premium: { value: 0, viewValue: 'INR' },
    ageGroup: '',
    term: '',
    paymentduration: '',
    type_viewValue1: '',
    planType: '',
    mobile: '',
    age: '',
    email: '',
    dob: '',
    si: null,
    term_duration: { value: '', viewValue: '' },
    pay_duration: { value: '', viewValue: '' },
    AnnualPremium:0,
   
  }


  getOipaPlan() {
    this.oipa.oipaCompanyPlans('F44A5CBB-DCB1-42A6-8878-E8249F922DFB').subscribe((data: any) => {
      this.allCompanyPlan = []
      data.plans = data.plans ? data.plans : [];
      for (let plan of data.plans) {
        this.allCompanyPlan.push({
          planName: plan.planName,
          planId: plan.planId
        })
      }
      console.log(this.allCompanyPlan);
    })
  }

  onclickPlan(value) {
    this.compPlan.planName = value.planName;
    this.compPlan.planId = value.planId;
    this.oipaData.planName = this.compPlan.planName
    this.oipaData.planId = this.compPlan.planId
    this.show = true;
    this.show1 = false;
    if (this.compPlan.planName == "Profinch Health Silver") {
      this.planiddmn = 1
    }

    else if (this.compPlan.planName == "Profinch Health Gold") {
      this.planiddmn = 2
    }

    else if (this.compPlan.planName == "Profinch Diamond Plan") {
      this.planiddmn = 3
    }
    let postData = {
      "variables": {
        "AgeGroup": { "value": this.data.ageGroupdmn, "type": "integer" }, "ProductCode": { "value": this.planiddmn, "type": "integer" }
      }
    }
    console.log(postData)
    this.oipa.agegroupproduct(postData).subscribe(
      (data: any) => {
        this.RateTableID = data[0].RateTableID.value
        if (this.RateTableID == 0) {
          this.selecteddata = this.datas0[0].value;
          this.suminsuredamount = parseInt(this.selecteddata)
          this.oipaData.si = this.suminsuredamount
        }

        else if (this.RateTableID == 1) {
          this.selecteddata = this.datas1[0].value;
          this.suminsuredamount = parseInt(this.selecteddata)
          this.oipaData.si = this.suminsuredamount
        }
        else if (this.RateTableID == 2) {
          this.selecteddata = this.datas2[0].value;
          this.suminsuredamount = parseInt(this.selecteddata)
          this.oipaData.si = this.suminsuredamount
        }
        this.Ratecal();
      },
      (error) => {
        console.log(error);
        alert('something went wrong');
      }
    );

  }

  Ratecal() {
    var myselct = parseInt(this.selecteddata);
    console.log("myse" + myselct)
    let postData = {
      "variables": {
        "AgeGroup": { "value": this.oipaData.ageGroup, "type": "integer" }, "ProductCode": { "value": this.planiddmn, "type": "integer" }, "SI": { "value": myselct, "type": "integer" }
      }
    }
    console.log(postData)
    this.oipa.rateValue(postData).subscribe(
      (data: any) => {
        this.rateValue = data[0].Rate.value
        this.Calculate();
        console.log(data)
      },
      (error) => {
        console.log(error);
        alert('something went wrong');
      }
    );
  }

  Calculate() {
    var myselct = parseInt(this.selecteddata);
    console.log("myse" + myselct)
    let postData = {
      "variables": {
        "AgeGroup": { "value": this.oipaData.ageGroup, "type": "integer" }, "ProductCode": { "value": this.planiddmn, "type": "integer" }, "SI": { "value": myselct, "type": "integer" }
      }
    }
    this.oipa.rateValue(postData).subscribe(
      (data: any) => {
        this.rateValue = data[0].Rate.value
        console.log(this.rateValue)
        this.cal2();
      },
      (error) => {
        console.log(error);
        alert('something went wrong');
      }
    );
  }

  cal2() {
    this.oipaData.premium.value=((this.selecteddata / 1000) * this.rateValue) * 12
    this.oipaData.term = '01'
    this.oipaData.term_duration.value = this.oipaData.term
    this.oipaData.term_duration.viewValue = '1 Year'
    this.oipaData.paymentduration = '01'
    this.oipaData.pay_duration.value = this.oipaData.paymentduration
    this.oipaData.pay_duration.viewValue = 'Monthly'
    this.suminsuredamount = this.selecteddata;
    this.oipaData.AnnualPremium = this.oipaData.premium.value
  }



  onSubmit() {
    let data: any = this.oipaData
    console.log(data)
    this.router.navigate(['health-details'], {
      queryParams: { data: btoa(JSON.stringify(data)) }
    });
  }

  radioChangeterm(e) {
    this.oipaData.term = e.value
    this.oipaData.term_duration.value = this.oipaData.term
    if (e.value == '01') {
      this.oipaData.term_duration.viewValue = '1 Year'
    }
    else if (e.value == '02') {
      this.oipaData.term_duration.viewValue = '2 Year'
    }
    else if (e.value == '03') {
      this.oipaData.term_duration.viewValue = '3 Year'
    }
    this.PrimumCalculate();
  }

  radioChangepaymentduration(e) {
    this.oipaData.paymentduration = e.value
    this.oipaData.pay_duration.value = this.oipaData.paymentduration
    if (e.value == '12') {
      this.oipaData.pay_duration.viewValue = 'Monthly'
    }
    else if (e.value == '04') {
      this.oipaData.pay_duration.viewValue = 'Quarterly'
    }
    else if (e.value == '02') {
      this.oipaData.pay_duration.viewValue = 'Semi-Annual'
    }
    else if (e.value == '01') {
      this.oipaData.pay_duration.viewValue = 'Annual'
    }
    this.PrimumCalculate();
  }

  PrimumCalculate() {

    if (this.selecteddata != 0 && this.oipaData.term == '01' && this.oipaData.paymentduration == '01') {
      this.oipaData.premium.value = (((this.selecteddata / 1000) * this.rateValue) * parseInt(this.oipaData.paymentduration))*12
      console.log(this.oipaData.premium.value)
      this.suminsuredamount = parseInt(this.selecteddata)
      this.AnnualPremium = this.oipaData.premium.value
    }
    else if (this.selecteddata != 0 && this.oipaData.term == '01' && this.oipaData.paymentduration == '02') {
      this.oipaData.premium.value = (((this.selecteddata / 1000) * this.rateValue) * parseInt(this.oipaData.paymentduration))*3
      console.log(this.oipaData.premium.value)
      this.suminsuredamount = parseInt(this.selecteddata)
    }
    else if (this.selecteddata != 0 && this.oipaData.term == '01' && this.oipaData.paymentduration == '04') {
      this.oipaData.premium.value = ((this.selecteddata / 1000) * this.rateValue) * parseInt(this.oipaData.paymentduration)
      console.log(this.oipaData.premium.value)
      this.suminsuredamount = parseInt(this.selecteddata)
    }
    else if (this.selecteddata != 0 && this.oipaData.term == '01' && this.oipaData.paymentduration == '12') {
      this.oipaData.premium.value = (((this.selecteddata / 1000) * this.rateValue) * parseInt(this.oipaData.paymentduration))/12
      console.log(this.oipaData.premium.value)
      this.suminsuredamount = parseInt(this.selecteddata)
    }

    else if (this.selecteddata != 0 && this.oipaData.term == '02' && this.oipaData.paymentduration == '01') {
      this.PrimumCal = (((this.selecteddata / 1000) * this.rateValue) * parseInt(this.oipaData.paymentduration))*12
      this.oipaData.premium.value = (this.PrimumCal) - (this.PrimumCal * 0.05)
      console.log(this.oipaData.premium.value)
      this.suminsuredamount = parseInt(this.selecteddata)
      this.AnnualPremium = this.oipaData.premium.value
    }
    else if (this.selecteddata != 0 && this.oipaData.term == '02' && this.oipaData.paymentduration == '02') {
      this.PrimumCal = (((this.selecteddata / 1000) * this.rateValue) * parseInt(this.oipaData.paymentduration))*3
      this.oipaData.premium.value = (this.PrimumCal) - (this.PrimumCal * 0.05)
      console.log(this.oipaData.premium.value)
      this.suminsuredamount = parseInt(this.selecteddata)
    }
    else if (this.selecteddata != 0 && this.oipaData.term == '02' && this.oipaData.paymentduration == '04') {
      this.PrimumCal = ((this.selecteddata / 1000) * this.rateValue) * parseInt(this.oipaData.paymentduration)
      this.oipaData.premium.value = (this.PrimumCal) - (this.PrimumCal * 0.05)
      console.log(this.oipaData.premium.value)
      this.suminsuredamount = parseInt(this.selecteddata)
    }
    else if (this.selecteddata != 0 && this.oipaData.term == '02' && this.oipaData.paymentduration == '12') {
      this.PrimumCal = (((this.selecteddata / 1000) * this.rateValue) * parseInt(this.oipaData.paymentduration))/12
      this.oipaData.premium.value = (this.PrimumCal) - (this.PrimumCal * 0.05)
      console.log(this.oipaData.premium.value)
      this.suminsuredamount = parseInt(this.selecteddata)
    }
    else if (this.selecteddata != 0 && this.oipaData.term == '03' && this.oipaData.paymentduration == '01') {
      this.PrimumCal = (((this.selecteddata / 1000) * this.rateValue) * parseInt(this.oipaData.paymentduration))*12
      this.oipaData.premium.value = (this.PrimumCal) - (this.PrimumCal * 0.10)
      console.log(this.oipaData.premium.value)
      this.suminsuredamount = parseInt(this.selecteddata)
      this.AnnualPremium = this.oipaData.premium.value
    }
    else if (this.selecteddata != 0 && this.oipaData.term == '03' && this.oipaData.paymentduration == '02') {
      this.PrimumCal = (((this.selecteddata / 1000) * this.rateValue) * parseInt(this.oipaData.paymentduration))*3
      this.oipaData.premium.value = (this.PrimumCal) - (this.PrimumCal * 0.10)
      console.log(this.oipaData.premium.value)
      this.suminsuredamount = parseInt(this.selecteddata)
    }
    else if (this.selecteddata != 0 && this.oipaData.term == '03' && this.oipaData.paymentduration == '04') {
      this.PrimumCal = ((this.selecteddata / 1000) * this.rateValue) * parseInt(this.oipaData.paymentduration)
      this.oipaData.premium.value = (this.PrimumCal) - (this.PrimumCal * 0.10)
      console.log(this.oipaData.premium.value)
      this.suminsuredamount = parseInt(this.selecteddata)
    }
    else if (this.selecteddata != 0 && this.oipaData.term == '03' && this.oipaData.paymentduration == '12') {
      this.PrimumCal = (((this.selecteddata / 1000) * this.rateValue) * parseInt(this.oipaData.paymentduration))/12
      this.oipaData.premium.value = (this.PrimumCal) - (this.PrimumCal * 0.10)
      console.log(this.oipaData.premium.value)
      this.suminsuredamount = parseInt(this.selecteddata)
    }
  }

  onclickview() {
    this.show = false;
    this.show1 = true;
  }


}
