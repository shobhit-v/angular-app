import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-example',
  templateUrl: './ng-if-example.component.html',
  styleUrls: ['./ng-if-example.component.css']
})
export class NgIfExampleComponent implements OnInit {

  constructor() { }
  currentHero = true;
  ngOnInit() {
  }
  changNgIF() {
    this.currentHero = !this.currentHero;
  }
  filer_age: number = 1;
  people: any[] = [
    {
      "name": "abc",
      "age": 35
    },
    {
      "name": "xyz",
      "age": 30
    },
    {
      "name": "pqr",
      "age": 28
    },
    {
      "name": "lmno",
      "age": 35
    },
    {
      "name": "qwerty",
      "age": 22
    },
    {
      "name": "asdf",
      "age": 38
    }
  ];

}
