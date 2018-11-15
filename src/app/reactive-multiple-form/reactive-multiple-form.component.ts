import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-multiple-form',
  templateUrl: './reactive-multiple-form.component.html',
  styleUrls: ['./reactive-multiple-form.component.css']
})
export class ReactiveMultipleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  get emailControl() {
    return this.loginForm.get('email')
  }

  get passControl() {
    return this.loginForm.get('password')
  }

  displayGroup() {
    console.log(this.loginForm);
  }

}
