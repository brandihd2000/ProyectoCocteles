import { HttpClient } from "@angular/common/http";
import { Injectable, Inject } from "@angular/core";
import { Observable } from "rxjs";
import Cocktail from "src/app/Shared/Models/Features/Cocktail.model";
import { GenericService } from "../../genericService.service";

@Injectable({
    providedIn: 'root'
})


export class CocktailService extends GenericService <Cocktail>{

    public controlName: string = 'cocktails'
    constructor(public _http: HttpClient) {
        super(_http,'cocktails ');
    }

    public getAllPopularCocktails(): Observable<Cocktail> {
     return this._http.get<Cocktail>(`${this.apiUrl}popular.php`);
    }

    public getAllPopularCocktailsByName(name: string): Observable<Cocktail> {
        return this._http.get<Cocktail>(`${this.apiUrl}search.php?s=${name}` );
       }

}