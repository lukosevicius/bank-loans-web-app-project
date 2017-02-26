import { Component, Input, OnInit  } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Customer} from "../customer"
import { CustomerService} from "../customer.service"

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'customer-details',
  templateUrl: 'customer-details.component.html'
})
export class CustomerDetailsComponent implements OnInit {
  @Input()
  customer: Customer;

  acceptLoan() {
    this.customer.status = "Patvirtina"
  }

  declineLoan() {
    this.customer.status = "Atmesta"
  }

  constructor(
      private customerService: CustomerService,
      private route: ActivatedRoute,
      private location: Location
  ){}

  ngOnInit(): void{
        this.route.params
            .switchMap((params: Params) => this.customerService.getCustomer(+params['id']))
            .subscribe(customer => this.customer = customer);
  }


  goBack(): void {
    this.location.back();
  }


}


