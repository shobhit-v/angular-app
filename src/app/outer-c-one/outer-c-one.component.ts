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
    const id: string = route.snapshot.params.userId;
    console.log("By Snap shot route params", id);

    const email: string = route.snapshot.queryParams.email;
    console.log("By Snap shot query params", email);

    const user = route.snapshot.data.headingone;
    console.log("By Snap shot routing data", user);

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
        console.log(qparams.email);
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
