import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'navbar',
    template: `
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" [routerLink]="['Home']">Muh Company</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <!--<li><a href="#">Users</a></li>-->  <!--avoid causes full page reload-->
                    <!--<li><a href="#">Posts</a></li> -->
                    <li><a [routerLink]="['Users']">Users</a></li> <!-- a tag does not have a native routerlink property -->
                    <li><a [routerLink]="['Posts']">Posts</a></li>
                </ul>
            </div>
            <!--/.navbar-collapse -->
        </div>
    <!-- /.container-fluid -->
</nav>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent{
}