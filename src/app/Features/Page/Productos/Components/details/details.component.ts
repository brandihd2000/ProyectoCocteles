import { Component, OnInit } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import Drink from 'src/app/Shared/Models/Features/Drinks.model';
import { CocktailService } from '../../../../../Shared/Services/service.index'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public cocktail: Drink = new Drink();
  public name: string = '';
  constructor(public CocktailService: CocktailService, private route: ActivatedRoute) {
    this.cocktail
   }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name') || '';
    this.getAllPopularCocktailsByName(this.name);
  }

  public async getAllPopularCocktailsByName(name: string) {
    try {
      const value = await lastValueFrom(this.CocktailService.getAllPopularCocktailsByName(this.name).pipe(map((items: { drinks: any; }) => items.drinks)));
      this.cocktail = value[0];
      debugger
    } catch (error) {
      console.log(error)
    } finally {

    }
  }

}
