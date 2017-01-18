import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavbarComponent} from './navbar.component';
import {HomeComponent} from './home.component';
import {UsersComponent} from './users.component';
import {PostsComponent} from './posts.component';
import {NewUserComponent} from './newUser.component';
import {EditUserComponent} from './editUser.component';
import {NotFoundComponent} from './notFound.component';

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/users', name: 'Users', component: UsersComponent },
    { path: '/posts', name: 'Posts', component: PostsComponent},
    { path: '/users/new', name: 'NewUser', component: NewUserComponent},
    { path: '/users/:id', name: 'EditUser', component: NewUserComponent},
    { path: '/notFound', name: 'NotFound', component: NotFoundComponent},
    { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])

@Component({
    selector: 'my-app',
    template: `
        <navbar> </navbar>
        <div class="container">
        <router-outlet></router-outlet>
        </div>
    `,
    directives: [
        NavbarComponent,
        
        ROUTER_DIRECTIVES] /*RouterOutlet, RouterLink*/
})
export class AppComponent {
}