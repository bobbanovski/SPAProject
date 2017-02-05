import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class PostService {
    private _postUrl = "http://jsonplaceholder.typicode.com/posts"
    
    constructor (private _http: Http){        
    }

    getPosts(){
        return this._http.get(this._postUrl)
            .map(res => res.json());
    }
}