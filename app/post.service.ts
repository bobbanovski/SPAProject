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
    getComments(id){
        return this._http.get(this._postUrl + "/" + id + "/comments")
            .map(res => res.json());
    }

    getUserPosts(user?){
        if(user && user.userId){
            return this._http.get(this._postUrl + "?userId=" + user.userId)
                .map(res => res.json());
        }
        return this._http.get(this._postUrl)
            .map(res => res.json());
    }
}