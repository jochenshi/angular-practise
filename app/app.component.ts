/**
 * Created by Jincheng on 2017/2/10.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heroes">Heros</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls:['app/app.component.css']
})

export class AppComponent {
    title = 'Tours of Heroes';
}