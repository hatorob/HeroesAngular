import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
      heroes:any[] = [];
      termino:string = "";
     

  constructor( private activatedRoute:ActivatedRoute,
    private _heroesService: HeroesService ) { 

    }

  ngOnInit(): void {
      
    this.activatedRoute.params.subscribe( params => {
        this.termino = params['termino'];
        this.heroes = this._heroesService.buscarHeroes( params['termino']);
        console.log(this.heroes);
    })

  }

}
