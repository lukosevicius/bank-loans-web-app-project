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
        .then(customer => {
          this.customers.push(customer);
          this.selectedCustomer = null;
        });
  }

  submitLoanApplication(name: string,  surname: string):void{
     console.log(name + surname);


    // if (!name||!surname||!docNumber||!amount||!personCode||!payYear||!payMonth||!payDay||!docType||!docNumber||!country||!address||!phoneNum1||email||salary){return;}
    // else{
    //   name=name.trim();
    //   this.customerService.create(name,amount, salary,email, surname,personCode,docType,docNumber,phoneNum1,country,city,address, payYear, payMonth, payDay)
    // }
    //
    //
  }



}
