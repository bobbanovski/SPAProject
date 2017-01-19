import {Component, OnInit} from 'angular2/core';
import {ControlGroup, Validators, FormBuilder} from 'angular2/common';
import {newUserValidator} from './newUserValidator';
import {Router, CanDeactivate, RouteParams} from 'angular2/router';
import {UserService} from './user.service';
import {User} from './user';

@Component({
    templateUrl: 'app/newUser.component.html',
    providers: [UserService]
})

export class NewUserComponent implements OnInit, CanDeactivate{
    form: ControlGroup;
    title: string;
    user = new User();

    constructor(fb: FormBuilder,private _router: Router,private _routeParams: RouteParams, private _userService: UserService){
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, newUserValidator.checkEmail ]) ],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
                })
        })        
    }
    routerCanDeactivate(){
            if(this.form.dirty)
                return confirm("are you sure you wish to navigate away from this page?");
            return true;
        }
    
    onSubmit(){
        var result;
        if(!this.user.id){
            result = this._userService.addUser(this.user)            
            } else {
            result = this._userService.updateUser(this.user)            
            }
            result.subscribe(x => {this._router.navigate(['Users']);
        });
    }

    ngOnInit(){
        var id = this._routeParams.get("id");
        this.title = id ? "Edit User" : "New User";

        if(!id)
            return;

        this._userService.getUser(id)
            .subscribe(
                user => this.user = user,
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound']);
                    }
                }
            )
    }
}