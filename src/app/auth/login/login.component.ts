import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';

// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  hide = true;
  @ViewChild('username') username: NgModel;
  // private authStatusSub: Subscription;

  constructor() {}

  ngOnInit() {
  }

  onLogin(loginForm: NgForm) {
    console.log(this.username);
    return;
  }

  ngOnDestroy() {
  }
}
