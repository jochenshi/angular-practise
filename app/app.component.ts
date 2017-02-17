/**
 * Created by Jincheng on 2017/2/10.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard">Heroes</a>
            <a routerLink="/heroes"></a>
        </nav>
        <router-outlet></router-outlet>
        <my-heroes></my-heroes>
    `
})

export class AppComponent {
    title = 'Tours of Heroes';
}