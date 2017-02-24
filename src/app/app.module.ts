import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {CustomerDetailsComponent} from './customers/customer-details.component';
import {CustomerComponent} from "./customers/customer.component";
import {CustomerService} from "./customers/customer.service";
import {DraftsComponent} from "./customers/drafts.component";


@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomerComponent,
    DraftsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: ' ',
        component: AppComponent
      },
      {
        path: 'drafts',
        component: DraftsComponent
      },
      {
        path: 'admin',
        component: CustomerComponent
      }
    ])
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}


