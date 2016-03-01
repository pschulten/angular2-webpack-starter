/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {RouterActive} from './directives/router-active';
//import {Home} from './home/home';
import {Template} from "./template/template.component";
import {Form} from "./form/form.component";

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS ],
  directives: [ ...ROUTER_DIRECTIVES, RouterActive ],
  pipes: [],
  styles: [require('./app.scss')],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app/app.html'
})
@RouteConfig([
  { path: '/', component: Template, name: 'Template' },
  { path: '/form', component: Form, name: 'Form' },
  //{ path: '/home', component: Home, name: 'Home' },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', loader: () => require('es6-promise!./about/about')('About'), name: 'About' },
  { path: '/**', redirectTo: ['Template'] }
])
export class App {
  na_logo = 'assets/img/scheinhorn.png';
  name = 'Pschu Playground';
  url = 'http://pschu.com';
  constructor() {

  }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
