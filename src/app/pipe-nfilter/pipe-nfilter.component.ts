import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-nfilter',
  templateUrl: './pipe-nfilter.component.html',
  styleUrls: ['./pipe-nfilter.component.css']
})
export class PipeNfilterComponent implements OnInit {

  constructor() { }
  somevar: string = "Hello";
  date: string = '26August1988';
  birthday = new Date(1988, 3, 15); // April 15, 1988  
  toggle = true; // start with true == shortDate
  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }
  toggleFormat() {
    this.toggle = !this.toggle;
  }
  ngOnInit() {
  }

}
