import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
    email: new FormControl(),
    password: new FormControl()
  });

}
