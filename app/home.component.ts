import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    template: `
        <h1>Home</h1>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS]

})
export class HomeComponent{

}

