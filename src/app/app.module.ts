import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponent } from './third/third.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { from } from 'rxjs';
import { TwoWayClassComponent } from './two-way-class/two-way-class.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CityComponent } from './city/city.component';
import { PipeNfilterComponent } from './pipe-nfilter/pipe-nfilter.component';
import { ReverseStr } from './reverse-str.pipe';
import { CityNamePipe } from './city-name.pipe';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponentComponent,
    ThirdComponent,
    TwoWayBindingComponent,
    TwoWayClassComponent,
    ParentComponent,
    ChildComponent,
    CityComponent,
    PipeNfilterComponent,
    ReverseStr,
    CityNamePipe,
    NgIfExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
