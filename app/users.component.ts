import {Component, OnInit} from 'angular2/core'
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import {UserService} from './user.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    template: `
        <h1>Users</h1>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            
        </table>
    `,
    providers: [UserService, HTTP_PROVIDERS]
})
export class UsersComponent{
    
}