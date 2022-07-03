import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.vegrecipesofindia.com%2Fwp-content%2Fuploads%2F2013%2F03%2Fpulao-recipe-280x280.jpg&imgrefurl=https%3A%2F%2Fwww.vegrecipesofindia.com%2Frecipes%2F&tbnid=g0t__gIxITbesM&vet=12ahUKEwj72N3Codz4AhUyi9gFHecuAPoQMygaegUIARCfAg..i&docid=KVEdjHdWqLnqMM&w=280&h=280&q=recipe&ved=2ahUKEwj72N3Codz4AhUyi9gFHecuAPoQMygaegUIARCfAg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
