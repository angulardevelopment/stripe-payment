import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StripePaymentComponent } from './stripe-payment/stripe-payment.component';
import { FinalStepComponent } from './final-step/final-step.component';

const routes: Routes = [
  {path:'FinalStepComponent', component: FinalStepComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
