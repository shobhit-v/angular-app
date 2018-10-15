import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  status: string = 'block';
  constructor() { }

  ngOnInit() {
  }
  changeStatus = function():void{
    if(this.status === 'block'){
      this.status='none'
      return;
    }
    this.status='block'
  }
}
