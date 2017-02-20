/**
 * Created by Jincheng on 2017/2/10.
 */
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector:'my-dashboard',
    templateUrl:'app/dashboard.component.html',
    styleUrls:['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit{
    heros : Hero[] = [];

    constructor(private router:Router,private heroService : HeroService){}

    ngOnInit():void{
        this.heroService.getHeros()
            .then(heros => this.heros = heros.slice(1,5))
    }

    gotoDetail(hero : Hero):void{
        let link = ['/detail',hero.id];
        this.router.navigate(link);
    }


}