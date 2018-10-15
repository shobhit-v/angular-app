import { Component } from '@angular/core';

@Component({
  selector: 'app-root-one',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Decalring diff variables
  title = 'Shobhit PlayGround!!';
  data: string = "Some data here";
  count: number = 1;
  onClick = function (): void {
    this.data = "New Value: " + this.count++;
  }
}
