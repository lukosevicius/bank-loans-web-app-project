import {Component} from "@angular/core";


@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  <my-customers></my-customers>`
})

export class AppComponent {
  title = 'Paskolos';
}
