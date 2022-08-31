import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StripePaymentComponent } from '../stripe-payment/stripe-payment.component';

@Component({
  selector: 'app-final-step',
  templateUrl: './final-step.component.html',
  styleUrls: ['./final-step.component.scss']
})
export class FinalStepComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.checkout();
  }

  checkout() {
    const dialogRef = this.dialog.open(StripePaymentComponent, {
        // opening dialog here which will give us back stripeToken
        data: {totalAmount: this.getTotal()},
    });
dialogRef.afterClosed()
        // waiting for stripe token that will be given back
        .subscribe((result: any) => {
            if (result) {
              console.log(result, 'result');
              
                // this.createOrder(result.token.id);
            }
        });
}

getTotal(){
  return 1;
}

}
