import {Component} from 'angular2/core';
import {ControlGroup, Validators, FormBuilder} from 'angular2/common';
import {newUserValidator} from './newUserValidator';
import {Router, CanDeactivate} from 'angular2/router';
import {UserService} from './user.service';

@Component({
    templateUrl: 'app/newUser.component.html',
    providers: [UserService]
})

export class NewUserComponent implements CanDeactivate{
    form: ControlGroup;
    constructor(fb: FormBuilder, private _router: Router, private _userService: UserService){
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
        this._userService.addUser(this.form.value)
            .subscribe(x => {
                this._router.navigate(['Users']);    
            })
        
    }
}