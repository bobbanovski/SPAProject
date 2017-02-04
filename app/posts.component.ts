import {Component, OnInit} from 'angular2/core';
import {PostService} from './post.service';
import {Observable} from 'rxjs/Observable';
import {SpinnerComponent} from './spinner.component';

@Component({
    templateUrl: 'app/posts.component.html',
    providers: [PostService],
    directives: [SpinnerComponent]
})
export class PostsComponent implements OnInit{
    posts = [];
    constructor (private _postService: PostService){}
    isLoading = true;
    ngOnInit(){
        this._postService.getPosts()
            .subscribe(posts => this.posts = posts,
            null,
            () => {this.isLoading = false });
    }
}