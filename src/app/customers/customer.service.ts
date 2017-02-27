import { Injectable } from '@angular/core';
//import {CUSTOMERS} from "./mock-data";
import {Customer} from "./customer";
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class CustomerService {


  constructor(private http: Http) { }

  //DUOMENU IMIMAS IS mock-data.ts
  // getCustomers(): Promise<Customer[]> {
  //   return Promise.resolve(CUSTOMERS);
  // }

  private customersUrl = 'api/customers';
  private mydbUrl = 'http://localhost:8080/customers';
  private beanloanUrl = 'http://localhost:8080/loan/get/all/';
  private beanloanGetIDUrl = 'http://localhost:8080/loan';


  // DUOMENU IMIMAS IS LOCAL DUOMENU BAZES
  getCustomers(): Promise<Customer[]> {
    return this.http.get(this.beanloanUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }



  //private customersUrl = 'http://localhost:8080/loan/get/all/';


  // getCustomers(): Promise<Customer[]> {
  //   return this.http.get(this.customersUrl)
  //       .toPromise()
  //       .then(response => response.json().data as Customer[])
  //       .catch(this.handleError);
  // }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


  getCustomer(id: number): Promise<Customer> {
    const url = `${this.beanloanGetIDUrl}/${id}`;
    return this.http.get(url)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

  update(customer: Customer): Promise<Customer> {
    const url = `${this.customersUrl}/${customer.id}`;
    return this.http
        .put(url, JSON.stringify(customer), {headers: this.headers})
        .toPromise()
        .then(() => customer)
        .catch(this.handleError);
  }

  create(name: string): Promise<Customer> {
    return this.http
        .post(this.customersUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
  }

}





