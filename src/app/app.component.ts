import { Component } from '@angular/core';
// import {Customer} from './customer';
// import {CUSTOMERS} from "./mock-data";

@Component({
  selector: 'app-root',
  template: `
<div class="panel panel-default">
  <div class="panel-heading"><h1 style="text-align:center">Vartojimo paskolos</h1></div>

<table class="table">
  <thead class="thead-inverse">
  <tr>
    <th>Suma</th>
    <th>Vartotojas</th>
    <th>Statusas</th>
    <th>Data</th>
  </tr>
  </thead>
  <tbody>
  <tr *ngFor="let customer of Customers">
    <td  >
      {{customer.suma}}
    </td>    
    <td  >
      {{customer.name}}
    </td>    
    <td  >
      {{customer.status}}
    </td>    
    <td  >
      {{customer.date}}
    </td>
  </tr>  

  </tbody>
</table>
</div>

`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Customers = CUSTOMERS;
}

export class Customer {
  suma: number;
  name: string;
  status: string;
  date: number;
}

const CUSTOMERS: Customer[] = [
  {suma: 11, name: 'Mr. Nice', status: 'accepted', date: 2017},
  {suma: 12, name: 'Narco', status: 'accepted', date: 2016},
  {suma: 13, name: 'Bombasto', status: 'accepted', date: 2016},
  {suma: 14, name: 'Celeritas', status: 'accepted', date: 2016},
  {suma: 15, name: 'Magneta', status: 'accepted', date: 2016},
  {suma: 16, name: 'RubberMan', status: 'accepted', date: 2016},
  {suma: 17, name: 'Dynama', status: 'accepted', date: 2016},
  {suma: 18, name: 'Dr IQ', status: 'accepted', date: 2016},
  {suma: 19, name: 'Magma', status: 'accepted', date: 2016},
  {suma: 20, name: 'Tornado', status: 'accepted', date: 2016}
]
