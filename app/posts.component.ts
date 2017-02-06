import {Component, OnInit} from 'angular2/core';
import {PostService} from './post.service';
import {UserService} from './user.service';
import {Observable} from 'rxjs/Observable';
import {SpinnerComponent} from './spinner.component';

@Component({
    templateUrl: 'app/posts.component.html',
    providers: [PostService, UserService],
    directives: [SpinnerComponent],
    styles: [
        `
        .posts li:hover { background: #3399ff; }
        `
    ]
})
export class PostsComponent implements OnInit{
    posts = [];
    users = [];

    currentPost;
    commentsLoading;
    postsLoading = true;

    constructor (private _postService: PostService,
                 private _userService: UserService){}
        
    ngOnInit(){
        this._postService.getPosts()
            .subscribe(posts => this.posts = posts,
            null,
            () => {this.postsLoading = false });
        this.getUsers();      
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

    getUsers(){
        this._userService.getUsers()
            .subscribe(users => this.users = users)
    }

    reloadPosts(userSelected){
        this.currentPost = null;
        this.postsLoading = true;        
        this._postService.getUserPosts(userSelected)
            .subscribe(posts => this.posts = posts,
                null,
                () => {this.postsLoading = false;}
                );
    }
}