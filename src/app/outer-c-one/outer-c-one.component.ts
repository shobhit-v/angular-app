import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-outer-c-one',
  templateUrl: './outer-c-one.component.html',
  styleUrls: ['./outer-c-one.component.css']
})
export class OuterCOneComponent implements OnInit {

  userId;
  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(
      paramsRecived => {
        this.userId = paramsRecived.userId;
        console.log(this.userId);
      }
      // function (params) {
      //   this.userId = params.userId;
      //   console.log(this.userId);
      // }
    )
    this.route.queryParams.subscribe(
      qparams => {
        console.log(qparams);
      }
    );
    this.route.data.subscribe(
      data => {
        console.log(data);
        console.log(data.headingone);
      }
    )

  }

  ngOnInit() {
  }

}
