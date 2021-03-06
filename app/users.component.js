System.register(['angular2/core', 'rxjs/add/operator/map', './user.service', 'angular2/router', './spinner.component'], function(exports_1, context_1) {
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
    var core_1, user_service_1, router_1, spinner_component_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_service) {
                    this._service = _service;
                    this.isLoading = true;
                }
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getUsers()
                        .subscribe(function (users) { return _this.users = users; }, null, function () { _this.isLoading = false; });
                };
                UsersComponent.prototype.deleteUser = function (user) {
                    var _this = this;
                    if (confirm("Are you sure you wish to delete this user?")) {
                        var index = this.users.indexOf(user);
                        this.users.splice(index, 1);
                        this._service.deleteUser(user)
                            .subscribe(null, function (err) {
                            alert("Deletion Unsuccessful");
                            _this.users.splice(index, 0, user);
                        });
                    }
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h1>Users</h1>\n        <spinner [visible]=isLoading></spinner> \n        <p> <a class=\"btn btn-primary\" [routerLink]=\"['NewUser']\">New User</a> </p>\n        <br />\n        <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Email</th>\n                    <th>Edit</th>\n                    <th>Delete</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"#user of users\">\n                    <td>{{ user.name}}</td>\n                    <td>{{ user.email }}</td>\n                    <td><a [routerLink]=\"['EditUser', {id: user.id}]\"> <i class=\"glyphicon glyphicon-edit\" ></i> </a> </td>\n                    <td><i (click)=\"deleteUser(user)\" class=\"glyphicon glyphicon-remove onHover\"></i></td>\n                </tr>\n            </tbody>\n        </table>\n    ",
                        providers: [user_service_1.UserService],
                        directives: [router_1.RouterLink, spinner_component_1.SpinnerComponent]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map