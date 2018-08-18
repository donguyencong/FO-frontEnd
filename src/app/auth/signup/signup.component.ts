import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel, NgModelGroup } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide = true;
  pw1;
  pw2;
  @ViewChild('passwords') pw: NgModelGroup;
  constructor() { }

  ngOnInit() {
  }

  onSignup(signupForm: NgModel) {
    console.log(signupForm);
    console.log(this.pw);
    return;
  }
}
