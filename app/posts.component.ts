import {Component, OnInit} from 'angular2/core';
import {PostService} from './post.service';
import {Observable} from 'rxjs/Observable';
import {SpinnerComponent} from './spinner.component';

@Component({
    templateUrl: 'app/posts.component.html',
    providers: [PostService],
    directives: [SpinnerComponent],
    styles: [
        `
        .posts li:hover { background: #3399ff; }
        `
    ]
})
export class PostsComponent implements OnInit{
    posts = [];
    currentPost;
    commentsLoading;
    postsLoading = true;

    constructor (private _postService: PostService){}
        
    ngOnInit(){
        this._postService.getPosts()
            .subscribe(posts => this.posts = posts,
            null,
            () => {this.postsLoading = false });      
    }
    selectPost(post){
        this.commentsLoading = true;
        this.currentPost = post; 
        
        this._postService.getComments(post.id)
            .subscribe(comments => post.comments = comments,
            null,
            () => this.commentsLoading = false
            );
    }
}