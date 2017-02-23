import {Component} from '@angular/core';
import {Customer} from './customer';
import {CUSTOMERS} from "./mock-data";

@Component({
  selector: 'app-root',
  template: `
<div class="panel panel-default">
  <div class="panel-heading"><h1 style="text-align:center">Vartojimo paskolos</h1></div>
  

<table class="table table-striped" >
  <thead class="thead-inverse">
  <tr>
    <th>Suma</th>
    <th>Vartotojas</th>
    <th>Statusas</th>
    <th>Data</th>
    
  </tr>
  </thead>
  <tbody>
  <tr *ngFor="let customer of Customers" 
    [class.selected]="customer === selectedCustomer" 
    (click) = "onSelect(customer)">
      <td  >
        €{{customer.loan}}
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


<div *ngIf="selectedCustomer">
  <h1>Kliento duomenys:</h1>
  <h2>{{selectedCustomer.name}}</h2>
  <div><label>Suma: </label> €{{selectedCustomer.loan}}</div>
  <div><label>Grynosios mėnesio pajamos: </label> €{{selectedCustomer.income}}</div>
  <div><label>Statusas: </label>{{selectedCustomer.status}}</div>
  
  <button (click)="acceptLoan()">
    Patvirtinti
  </button>
  <button (click)="declineLoan()">
    Atmesti
  </button>
</div>



<hr>
<div class="panel panel-default">
  <div class="panel-footer"><h1 style="text-align:center"></h1></div>
</div>

`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Customers = CUSTOMERS;

  selectedCustomer: Customer;


  acceptLoan() {
    this.selectedCustomer.status = "Patvirtina"
  }

  declineLoan() {
    this.selectedCustomer.status = "Atmesta"
  }

  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
  }

}




