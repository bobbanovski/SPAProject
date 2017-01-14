import {Component, OnInit} from 'angular2/core'
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import {UserService} from './user.service';
import {Observable} from 'rxjs/Observable';

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
            <tbody>
                <tr *ngFor="#user of users">
                    <td>{{ user.name}}</td>
                    <td>{{ user.email }}</td>
                    <td><i class="glyphicon glyphicon-edit"></i></td>
                    <td><i class="glyphicon glyphicon-remove"></i></td>
                </tr>
            </tbody>
        </table>
    `,
    providers: [UserService]
})
export class UsersComponent implements OnInit {
    users: any[];
    
    constructor(private _service: UserService){}

    ngOnInit(){
        this._service.getUsers()
            .subscribe(users => this.users = users);
    }
}