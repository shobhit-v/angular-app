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

}
