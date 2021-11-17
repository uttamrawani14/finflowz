import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { OipaService } from 'src/app/service/oipa.service';

interface type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-basic-info-plan',
  templateUrl: './basic-info-plan.component.html',
  styleUrls: ['./basic-info-plan.component.css']
})
export class BasicInfoPlanComponent implements OnInit {
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  show: boolean = false;
  show1: boolean = false;
  personage: number
  AgeGroup: number
  removable = true;
  types: type[] = [
    { value: 'self', viewValue: 'Self' },
  ];
  constructor(private router: Router, private route: ActivatedRoute,
    private snack: MatSnackBar,private oipa:OipaService) {
  }

  ngOnInit(): void {

  }

  openDialog() {
    this.show = true;
  }


  openDialog1() {
    this.show1 = true;
    this.show = false;

    if (this.personage >= 0 && this.personage <= 35) {
      this.AgeGroup = 1;
    }
    else if (this.personage >= 36 && this.personage <= 45) {
      this.AgeGroup = 2;
    }
    else if (this.personage >= 46 && this.personage <= 55) {
      this.AgeGroup = 3;
    }
    else if (this.personage >= 56 && this.personage <= 65) {
      this.AgeGroup = 4;
    }
    else if (this.personage >= 66 && this.personage <= 100) {
      this.AgeGroup = 5;
    }
    this.user.ageGroupdmn=this.AgeGroup
  }

  formSubmit() {
    // this.Ratecal()
    let data: any = this.user
    console.log(data)
    this.router.navigate(['view-health-plan'], {
      queryParams: { data: btoa(JSON.stringify(data)) }
    });



  }
  public user = {
    type: { value: '', viewValue: '' },
    dob: '',
    age: '',
    planType: '',
    mobile: '',
    email: '',
    ageGroupdmn:null
  }

  cal() {
    var dob = new Date(this.user.dob);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    this.personage = age
    var age1 = this.personage.toString();
    if (this.user.dob.length == 10) {
      this.user.age = age1;
    }


  }

  // Ratecal() {
  //       let postData = {
  //         "variables": {
  //           "AgeGroup": { "value":this.user.ageGroupdmn, "type": "integer" }, "ProductCode": { "value": , "type": "integer" }, "SI": { "value": 500000, "type": "integer" }
  //         }
  //       }
  //       this.oipa.rateValue(postData).subscribe(
  //         (data: any) => {
  //          console.log(data)

  //         },
  //         (error) => {
  //           console.log(error);
  //           this.snack.open('Please Enter the required Fields !! ', '', {
  //             duration: 3000,
  //           });
  //         }
  //       );
  //       console.log(postData)
  //     }

}
