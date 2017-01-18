import{Component, OnInit} from 'angular2/core';
import{FormBuilder, ControlGroup, Validators} from 'angular2/common';
import{Router, RouteParams} from 'angular2/router';
import{UserService} from './user.service';
import{User} from './user';
import{newUserValidator} from './newUserValidator';

@Component({
    templateUrl: 'app/editUser.component.html',
    providers: [UserService]
})

export class EditUserComponent implements OnInit{
    user = new User();
    form: ControlGroup;

    constructor(fb: FormBuilder, private _router: Router, private _userService: UserService, private _routeParams: RouteParams){
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


    ngOnInit(){
        var id = this._routeParams.get("id");

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