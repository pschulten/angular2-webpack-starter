import {Component} from "angular2/core";
import {FORM_DIRECTIVES} from "angular2/common";
import {AngularUnicorn} from "../template/angular-unicorn";
@Component({
  selector: 'unicorn-form',
  //templateUrl: require('./unicorn-form.html'),
  template: require('./unicorn-form.html'),
  // template: `<div class="container">
  //             <p>pee</p>
  //           </div>`,
  directives: [
    ...FORM_DIRECTIVES
  ]
})
export class UnicornFormComponent {
  colors = ['Red', 'White', 'Blue', 'Rainbow'];
  model = new AngularUnicorn(0, "", false, this.colors[3]);


  constructor() {

  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  ngOnInit() {
    console.log('form component...');

  }

}
