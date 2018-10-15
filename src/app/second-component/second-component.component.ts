import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  fontSize: number = 12;
  decreaseFont = function (): void {
    --this.fontSize;
  }
  increaseFont = function (): void {
    ++this.fontSize;
  }
  padding: number = 20;
}
