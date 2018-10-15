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

@NgModule({
  declarations: [
    AppComponent,
    SecondComponentComponent,
    ThirdComponent,
    TwoWayBindingComponent,
    TwoWayClassComponent,
    ParentComponent,
    ChildComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
