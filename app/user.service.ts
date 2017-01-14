import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';

@Injectable()

export class UserService{
    private _userUrl = "http://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http){
    }

    getUsers(){
        return this._http.get(this._userUrl)
            .map(res => res.json());
    }
    

    
}