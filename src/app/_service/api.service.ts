import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // search
  // lookup
  // list
  // filter
  constructor(private httpClient: HttpClient) { }

  // searchByFirstLetter

  searchCocktailByFirstLetter(firstLetter: string) {
    return this.httpClient
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + firstLetter)
  }

  // searchByName

  searchCocktailByName(query: string) {
    return this.httpClient
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + query)
  }

  searchByIngredient(ingredient: string) {
    return this.httpClient
      .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredient)
  }

  getIngredientsByList() {
    return this.httpClient
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
  }
}
