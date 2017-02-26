import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CustomerDetailsComponent} from './customers/customer-details/customer-details.component';
import {CustomerComponent} from "./customers/customer.component";
import {CustomerService} from "./customers/customer.service";
import {DraftsComponent} from "./customers/drafts/drafts.component";
import {FormComponent} from "./form/form.component";
import {SliderComponent} from "./slider/slider.component";

import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomerComponent,
    DraftsComponent,
    FormComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}


