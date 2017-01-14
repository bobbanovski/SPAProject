System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', './user.service'], function(exports_1, context_1) {
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
    var core_1, http_1, user_service_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent() {
                }
                UsersComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h1>Users</h1>\n        <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Email</th>\n                    <th>Edit</th>\n                    <th>Delete</th>\n                </tr>\n            </thead>\n            \n        </table>\n    ",
                        providers: [user_service_1.UserService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map