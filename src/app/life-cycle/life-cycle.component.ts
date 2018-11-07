import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {

  constructor() { }

  result: boolean=true;
  toggle(){
    this.result = !this.result;
  }
  ngOnInit() {
    console.log("Intialized");
  }

}
