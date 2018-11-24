import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-one',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //Decalring diff variables
  title = 'Shobhit PlayGround!!';
  data: string = "Some data here";
  count: number = 1;
  onClick = function (): void {
    this.data = "New Value: " + this.count++;
  }

  ngOnInit(){
    sessionStorage.setItem("token","abc");
  }
}
