import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {NgForm} from '@angular/forms';
import { MatChipInputEvent} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { FoodpostService } from '../foodpost.service';
import { FoodPost } from '../foodpost.model';
import { findReadVarNames } from '../../../../node_modules/@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-food-post-create',
  templateUrl: './food-post-create.component.html',
  styleUrls: ['./food-post-create.component.css']
})
export class FoodPostCreateComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;
  show = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  ingredients: string[] = [];
  @ViewChild('ingredientInput') ingredientInput: ElementRef;

  constructor(public recipePost: FoodpostService) {
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add our fruit
    if ((value || '').trim()) {
      this.ingredients.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(ingredient: string): void {
    const index = this.ingredients.indexOf(ingredient);
    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
  }

  onSubmitRecipe(form: NgForm) {
    console.log(form);
    console.log(this.ingredients);
    const vegan: boolean = (form.value.vegan === 'yes');
    const post: FoodPost = {
      title: form.value.recipe,
      comments: form.value.comments,
      ingredients: this.ingredients,
      author: 'NA',
      vegan: vegan,
      type: form.value.type,
      duration: form.value.duration,
      rating: 5,
      content: form.value.direction
    };
  }

  ngOnInit() {
  }

}
/*
interface FoodPost {
  title: string;
  comments: string;
  ingredients: Array<string>;
  author: string;
  vegan: boolean;
  type: string;
  duration: string;
  rating: number;
  content: string;
}
*/
