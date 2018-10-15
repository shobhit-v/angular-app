import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  txt: string = "Write Here!!";//Just to Init and rm undefined
  values: any;
  textVal: any="someIine";
  constructor() { }

  ngOnInit() {
  }
  onKeyUp(event: any): void {
    this.values += event.target.value + '-';
    console.log(event)
  }

}
