import {Control} from 'angular2/common';

export class newUserValidator {
    static checkEmail(control: Control){
        var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var valid = regEx.test(control.value);
        if (valid)
            return null;
        else
            return {checkEmail: true};
    }


}
