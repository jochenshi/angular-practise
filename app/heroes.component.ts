import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

/*const HEROS : Hero[] = [
    {id : 1 ,name : 'hero1'},
    {id : 2 ,name : 'hero2'},
    {id : 3 ,name : 'hero3'},
    {id : 4 ,name : 'hero4'},
    {id : 5 ,name : 'hero5'},
    {id : 6 ,name : 'hero6'},
    {id : 7 ,name : 'hero7'},
    {id : 8 ,name : 'hero8'},
    {id : 9 ,name : 'hero9'},
    {id : 10 ,name : 'hero10'},
    {id : 11 ,name : 'hero11'},
];*/

@Component({
    selector: 'my-heroes',
    templateUrl:'app/heros.component.html',
    styleUrls:['app/heros.component.css'],
})

export class HeroesComponent implements OnInit{
    heroes : Hero[];
    selectedHero : Hero;
    constructor(private router : Router,private heroService : HeroService){

    };

    getHeroes():void{
        this.heroService.getHeros().then(heroes => this.heroes = heroes)
    };
    ngOnInit():void{
       this.getHeroes();
    };

    onSelect(hero : Hero) : void{
        this.selectedHero = hero
    };

    gotoDetail():void{
        this.router.navigate(['/detail',this.selectedHero.id])
    }
}
