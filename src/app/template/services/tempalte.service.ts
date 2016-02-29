import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import Unicorn = template.Unicorn;


@Injectable()
export class TemplateService {
  value = 'Angular 2';
  constructor(public http: Http) {

  }

  log() {
    console.log('a service ...');
    // return this.http.get('/assets/data.json')
    // .map(res => res.json());
  }

  getData() {

  }

  getUnicorn() {
    return this.http.get('/assets/unicorn.json').map(res => res.json());
    //TODO Object.assign from server
    // var tom: Unicorn = new Unicorn();
    // tom.hornSize = 10;
    // tom.color = UncicornColor.Green;
    // tom.name = 'Tom';
  }
}
