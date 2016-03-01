import {Component} from "angular2/core";
import {UnicornFormComponent} from "./unicorn-form.component";
import Unicorn = template.Unicorn;


@Component({
  directives: [
    UnicornFormComponent
  ],
  template: '<unicorn-form></unicorn-form>'
})
export class Form {
  constructor() {

  }

  ngOnInit() {
    console.log('form page...');

  }

}
