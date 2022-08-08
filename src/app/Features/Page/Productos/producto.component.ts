import { Component, OnInit } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import Drink from 'src/app/Shared/Models/Features/Drinks.model';
import { CocktailService } from '../../../Shared/Services/service.index'
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  public cocktailsList: Array<Drink> = [];
  public TopcocktailsList: Array<Drink> = [];
  private timeout?: number;

  constructor(public CocktailService: CocktailService) { }

  ngOnInit(): void {
    this.getAllPopularCocktails();
    this.getAllPopularCocktailsValue();
  }

  onInput(value: string): void {
    window.clearTimeout(this.timeout);
    this.timeout = window.setTimeout(() => {
      if (value == "") {
        this.getAllPopularCocktailsValue();
      } else {
        this.getAllPopularCocktailsByName(value);
      }
    }, 400);
  }

  public search(value: string) {
    debugger
    if (value == "") {
      this.getAllPopularCocktailsValue();
    } else {
      this.getAllPopularCocktailsByName(value);
    }
  }
  public async getAllPopularCocktails() {
    try {
      this.TopcocktailsList = await lastValueFrom(this.CocktailService.getAllPopularCocktails().pipe(map((items) => items.drinks)));
    } catch (error) {
      console.log(error)
    } finally {

    }
  }

  public async getAllPopularCocktailsValue() {
    try {
      this.cocktailsList = await lastValueFrom(this.CocktailService.getAllPopularCocktails().pipe(map((items) => items.drinks)));
    } catch (error) {
      console.log(error)
    } finally {

    }
  }

  public async getAllPopularCocktailsByName(name: string) {
    try {
      const value = await lastValueFrom(this.CocktailService.getAllPopularCocktailsByName(name).pipe(map((items) => items.drinks)));
      if (value == null) {
        this.cocktailsList = [];
      } else {
        this.cocktailsList = value;
      }
    } catch (error) {
      console.log(error)
    } finally {

    }
  }

}
