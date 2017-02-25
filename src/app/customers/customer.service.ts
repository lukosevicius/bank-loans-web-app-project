import { Injectable } from '@angular/core';
import {CUSTOMERS} from "./mock-data";
import {Customer} from "./customer";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class CustomerService {


  constructor(private http: Http) { }

  //DUOMENU IMIMAS IS mock-data.ts
  getCustomers(): Promise<Customer[]> {
    return Promise.resolve(CUSTOMERS);
  }


  //DUOMENU IMIMAS IS DUOMENU BAZES
  // getCustomers(): Promise<Customer[]> {
  //   return this.http.get("http://localhost:8080/customers")
  //     .toPromise()
  //     .then(response => response.json())
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}





