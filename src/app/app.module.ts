import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customer-details.component';
import {CustomerComponent} from "./customer.component";
import {CustomerService} from "./customer.service";


@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
