import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BuyInsuranceComponent } from './pages/buy-insurance/buy-insurance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BasicInfoPlanComponent } from './pages/Health-Insurance/basic-info-plan/basic-info-plan.component';
import { ViewPlanComponent } from './pages/Health-Insurance/view-plan/view-plan.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { PaymentSuccessComponent } from './pages/payment-success/payment-success.component';
import { GeneratePolicyNumberComponent } from './pages/generate-policy-number/generate-policy-number.component';
import { HealthDetailsComponent } from './pages/Health-Insurance/health-details/health-details.component';
import { ChooseOptionsComponent } from './pages/choose-options/choose-options.component';
import { GenerateQouteNumberComponent } from './pages/generate-qoute-number/generate-qoute-number.component';
import { CustomerResponseComponent } from './pages/Health-Insurance/customer-response/customer-response.component';
import { CustomerRespPaymentComponent } from './pages/Health-Insurance/customer-resp-payment/customer-resp-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuyInsuranceComponent,
    NavbarComponent,
    BasicInfoPlanComponent,
    ViewPlanComponent,
    PaymentComponent,
    PaymentSuccessComponent,
    GeneratePolicyNumberComponent,
    HealthDetailsComponent,
    ChooseOptionsComponent,
    GenerateQouteNumberComponent,
    CustomerResponseComponent,
    CustomerRespPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    MatRadioModule,
    MatChipsModule,MatSlideToggleModule,
    FlexLayoutModule,
    MatTooltipModule,
    NgxUiLoaderModule, NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
