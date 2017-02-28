import {Component, OnInit, ViewChild, Input} from '@angular/core';
declare var $: any;

@Component({
  selector: 'radio-overview-example',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.css']
})

export class SliderComponent implements OnInit {
  isValid = false;
  result = 0;
  result1 = 0;
  errors = false;

  constructor() {

  }


  ngOnInit() {

  }

  sudet(income1, income2) {
    this.isValid = true;
    if (income1/income2 < 3.67) {
      this.result = (income1 * 0.16) / 0.524
      this.result1 = (this.result + income1) / 60
      this.errors = false;
      return this.result, this.result1;
    }
    else
      this.errors = true;
  }
}






