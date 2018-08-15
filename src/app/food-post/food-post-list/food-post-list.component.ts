import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


import { FoodPost } from '../foodpost.model';
import { FoodpostService } from '../foodpost.service';

@Component({
  selector: 'app-food-post-list',
  templateUrl: './food-post-list.component.html',
  styleUrls: ['./food-post-list.component.css']
})
export class FoodPostListComponent implements OnInit {
  posts: FoodPost[] = [];
  private postsSub: Subscription;
  constructor(public foodPostsService: FoodpostService) { 
 
  }

  ngOnInit() {
    this.foodPostsService.getPosts();
    this.postsSub = this.foodPostsService.getPostUpdateListener()
      .subscribe((posts: FoodPost[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
