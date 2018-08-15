import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

import { FoodPost } from './foodpost.model';
@Injectable({
  providedIn: 'root'
})
export class FoodpostService {
  private posts: FoodPost[] = [];
  private postsUpdated = new Subject<FoodPost[]>();

  constructor(private http: HttpClient) { }

  getPosts() {
    this.http.get<{ message: string; posts: FoodPost[] }>("http://localhost:4000/posts")
    .subscribe(postData => {
      this.posts = postData.posts;
      this.postsUpdated.next([...this.posts]);
    });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, comments: string, ingredients: Array<string>, author: string, vegan: boolean, type: string, duration: string, rating: number, content: string) {
    const post: FoodPost = {title: title, comments: comments, ingredients: ingredients, author: author, vegan: vegan, duration: duration, rating: rating, type: type, content: content};
    this.posts.push(post);
  }
}

