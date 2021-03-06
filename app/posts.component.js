System.register(['angular2/core', './post.service', './user.service', './spinner.component', './pagination.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, post_service_1, user_service_1, spinner_component_1, pagination_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postService, _userService) {
                    this._postService = _postService;
                    this._userService = _userService;
                    this.posts = [];
                    this.users = [];
                    this.postsLoading = true;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._postService.getPosts()
                        .subscribe(function (posts) { return _this.posts = posts; }, null, function () { _this.postsLoading = false; });
                    this.getUsers();
                };
                PostsComponent.prototype.selectPost = function (post) {
                    var _this = this;
                    this.commentsLoading = true;
                    this.currentPost = post;
                    this._postService.getComments(post.id)
                        .subscribe(function (comments) { return post.comments = comments; }, null, function () { return _this.commentsLoading = false; });
                };
                PostsComponent.prototype.getUsers = function () {
                    var _this = this;
                    this._userService.getUsers()
                        .subscribe(function (users) { return _this.users = users; });
                };
                PostsComponent.prototype.reloadPosts = function (userSelected) {
                    var _this = this;
                    this.currentPost = null;
                    this.postsLoading = true;
                    this._postService.getPosts(userSelected)
                        .subscribe(function (posts) { return _this.posts = posts; }, null, function () { _this.postsLoading = false; });
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/posts.component.html',
                        providers: [post_service_1.PostService, user_service_1.UserService],
                        directives: [spinner_component_1.SpinnerComponent, pagination_component_1.PaginationComponent],
                        styles: [
                            "\n        .posts li:hover { background: #3399ff; }\n        "
                        ]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService, user_service_1.UserService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map