import { Component } from '@angular/core';
// import {Customer} from './customer';
 import {CUSTOMERS} from "./mock-data";

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
    <th>Pakeisti statusa</th>
    
  </tr>
  </thead>
  <tbody>
  <tr *ngFor="let customer of Customers">
    <td  >
      {{customer.loan}}
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
    <button>
      Pakeisti statusa
    </button>
  </tr>  

  </tbody>
</table>
</div>



<h1>Kliento duomenys:</h1>
<h2>{{klientas.vardas}}</h2>
<div><label>Suma: </label>{{klientas.suma}}</div>
<div><label>Statusas: </label>{{klientas.statusas}}</div>
 <!--<div>-->
    <!--<label>Statusas: </label>-->
    <!--<input [(ngModel)]="klientas.statusas" placeholder="accepted">-->
<!--</div>-->


<button (click)="acceptLoan()">
  Patvirtinti
</button>
<button (click)="declineLoan()">
  Atmesti
</button>

<hr>
<div class="panel panel-default">
  <div class="panel-footer"><h1 style="text-align:center"></h1></div>
</div>

`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Customers = CUSTOMERS;
  klientas : Klientas = {
    suma: 3000,
    vardas: "Tomas Martinkėnas",
    statusas: "Nepatikrinta"
  }


  acceptLoan() {
    this.klientas.statusas = "Patvirtina"
  }

  declineLoan() {
    this.klientas.statusas = "Atmesta"
  }


}


export class Klientas {
  suma : number;
  vardas : String;
  statusas: String;
}

