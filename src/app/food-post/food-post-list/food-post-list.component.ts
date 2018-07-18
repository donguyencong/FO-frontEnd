import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-post-list',
  templateUrl: './food-post-list.component.html',
  styleUrls: ['./food-post-list.component.css']
})
export class FoodPostListComponent implements OnInit {
  food_posts = [
    { title: 'Canh ga chien nuoc mam', author: 'Cong Do Nguyen', duration: '1hr', content: 'Nau the nay nau the no' },
    { title: 'Ga rang muoi', author: 'Cong Do Nguyen', duration: '1hr', content: 'Nau the nay nau the no' },
    { title: 'Thit rang chay canh', author: 'Cong Do Nguyen', duration: '1hr', content: 'Nau the nay nau the no' },
    { title: 'Suon chua ngot', author: 'Cong Do Nguyen', duration: '1hr', content: 'Nau the nay nau the no' },
    { title: 'Ga xao gung', author: 'Cong Do Nguyen', duration: '1hr', content: 'Nau the nay nau the no' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
