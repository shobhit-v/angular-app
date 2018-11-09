import { Component, OnInit } from '@angular/core';

import { Person } from '../person';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  person1 = new Person('ABCD', 'email@email.com', 45678, 'SOME ADDRESS');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
