import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyInsuranceComponent } from './pages/buy-insurance/buy-insurance.component';
import { ChooseOptionsComponent } from './pages/choose-options/choose-options.component';
import { BasicInfoPlanComponent } from './pages/Health-Insurance/basic-info-plan/basic-info-plan.component';
import { CustomerRespPaymentComponent } from './pages/Health-Insurance/customer-resp-payment/customer-resp-payment.component';
import { CustomerResponseComponent } from './pages/Health-Insurance/customer-response/customer-response.component';
import { HealthDetailsComponent } from './pages/Health-Insurance/health-details/health-details.component';
import { ViewPlanComponent } from './pages/Health-Insurance/view-plan/view-plan.component';
import { HomeComponent } from './pages/home/home.component';
import { PaymentComponent } from './pages/payment/payment.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home', component:HomeComponent,pathMatch:'full'},
  {path:'choose-option', component:ChooseOptionsComponent,pathMatch:'full'},
  {path:'insurance-type', component:BuyInsuranceComponent,pathMatch:'full'},
  {path:'health-insurance', component:BasicInfoPlanComponent,pathMatch:'full'},
  {path:'view-health-plan', component:ViewPlanComponent,pathMatch:'full'},
  {path:'health-details', component:HealthDetailsComponent,pathMatch:'full'},
  {path:'payment', component:PaymentComponent,pathMatch:'full'},
  {path:'resp', component:CustomerResponseComponent,pathMatch:'full'},
  {path:'Customer-resp-Payment', component:CustomerRespPaymentComponent,pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
