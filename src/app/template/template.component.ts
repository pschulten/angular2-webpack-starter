import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from "angular2/common";
import {TemplateService} from "./services/tempalte.service";
import {AngularUnicorn} from "./angular-unicorn";
import Unicorn = template.Unicorn;

@Component({
    // The selector is what angular internally uses
    // for `document.querySelectorAll(selector)` in our index.html
    // where, in this case, selector is the string 'app'
    //selector: 'home',  // <home></home>
    // We need to tell Angular's Dependency Injection which providers are in our app.
    providers: [
        TemplateService
    ],
    // We need to tell Angular's compiler which directives are in our template.
    // Doing so will allow Angular to attach our behavior to an element
    directives: [
        ...FORM_DIRECTIVES
    ],
    // We need to tell Angular's compiler which custom pipes are in our template.
    pipes: [],
    // Our list of styles in our component. We may add more to compose many styles together
    styles: [require('./template.scss')],
    // Every Angular template is first compiled by the browser before Angular runs it's compiler
    template: require('./template.html')
})
export class Template {
    // Set our default values
    uni: Unicorn = <Unicorn>{color: "Green", name: "Horn"};

    myBlur(event: FocusEvent, uni: Unicorn) {
        console.log("my blur", event, uni);
    };

    myFocus(event: FocusEvent, uni: Unicorn) {
        console.log('my ford focus', event, uni);
    };

    setCustomUnicorn() {
        console.log("todo set");
        let test = new AngularUnicorn(0, "Siedenblixer", true, 'red');
        this.uni = test;
    };

    // TypeScript public modifiers
    constructor(public service: TemplateService) {

    }

    ngOnInit() {
        console.log('loading UniKORN...');
        this.service.getUnicorn().subscribe(data => this.uni = data);
    }

}
