import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../customers/customer.service";
import {Customer} from "../customers/customer";

@Component({
  selector: 'app-anketa',
  templateUrl: 'form-new.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent implements OnInit {

  customers: Customer[];
  selectedCustomer: Customer;

  constructor(private customerService : CustomerService){}


  ngOnInit() {
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.customerService.create(name)
        .then(hero => {
          this.customers.push(hero);
          this.selectedCustomer = null;
        });
  }



}
