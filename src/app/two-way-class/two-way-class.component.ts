import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-class',
  templateUrl: './two-way-class.component.html',
  styleUrls: ['./two-way-class.component.css']
})
export class TwoWayClassComponent implements OnInit {
  canSave: boolean = true;
  isUnchanged: boolean = true;
  isSpecial: boolean = true;
  someVar: boolean = true;
  currentClasses: {};

  constructor() { }

  ngOnInit() {
    this.setCurrentClasses();//This method neede to be called once to put calss name inside array as initialy we decledred array as empty
  }

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      'saveable': this.canSave,
      'modified': this.isUnchanged,
      'special': this.isSpecial
    };
  }
  changesDone = function () {
    this.currentClasses = {
      'saveable': this.canSave,
      'modified': !this.isUnchanged,
      'special': !this.isSpecial
    };
  }
  changesAgainDone() {
    this.currentClasses = {
      'saveable': !this.canSave,
      'modified': this.isUnchanged,
      'special': !this.isSpecial
    };
  }

}
