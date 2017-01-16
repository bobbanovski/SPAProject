import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common'

@Component({
    templateUrl: 'app/newUser.component.html'
})

export class NewUserComponent{
    form: ControlGroup;
    constructor(fb: FormBuilder){
        this.form = fb.group({
            name: [],
            email: [],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zip: []
                })
        })
    }
}