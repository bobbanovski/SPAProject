import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class PostService {
    private _postUrl = "http://jsonplaceholder.typicode.com/posts"
    
    constructor (private _http: Http){        
    }

    getPosts(userSelected?){
        var url = this._postUrl;
        if(userSelected && userSelected.userId){
            url += "?userId=" + userSelected.userId                
        }
        return this._http.get(url)
            .map(res => res.json());        
    }
    getComments(id){
        return this._http.get(this._postUrl + "/" + id + "/comments")
            .map(res => res.json());
    }    
}