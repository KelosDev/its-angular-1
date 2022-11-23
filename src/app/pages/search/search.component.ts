import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  drinks: any = [];
  drinkName: string = "";

  ingredients: any = [];
  ingredientName: string = "";



  constructor(private apiService: ApiService) { }

  ngOnInit(): void {

    this.apiService.getIngredientsByList()
      .subscribe((res: any) => {
        this.ingredients = res.drinks
        // console.log(this.ingredients);

      })

  }


  getDrinksByClick(): void {
    if (this.drinkName !== '') {

      if (this.drinkName.length === 1) {
        this.apiService.searchCocktailByFirstLetter(this.drinkName)
          .subscribe((res: any) => {
            console.log(res);

            this.drinks = res.drinks
          })

      } else {

        this.apiService.searchCocktailByName(this.drinkName)
          .subscribe((res: any) => {
            this.drinks = res.drinks
          })
      }
    }
    else {


      this.apiService.searchByIngredient(this.ingredientName)
        .subscribe((res: any) => {
          // console.log(res);

          this.drinks = res.drinks
        })
    }

  }

}
