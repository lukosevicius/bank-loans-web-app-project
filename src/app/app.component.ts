import {Component} from "@angular/core";


@Component({
  selector: 'app-root',
  template: `
    <nav>
     <a routerLink="/drafts">Drafts</a>
     <a routerLink="/admin">Customers</a>
   </nav>
   <router-outlet></router-outlet>`

})

export class AppComponent {
}
