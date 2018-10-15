import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() valueFromParent: string;
  @Output() customChildEvent = new EventEmitter<String>();

  onChange(valueFromCahild: string) {
    this.customChildEvent.emit(valueFromCahild);
  }


  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate
  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
}
