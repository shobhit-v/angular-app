import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

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
import { NgSwitchExampleComponent } from './ng-switch-example/ng-switch-example.component';
import { WeatherDispalyComponent } from './weather-dispaly/weather-dispaly.component';
import { HttpClientModule } from '@angular/common/http';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { LifeCycleChildComponent } from './life-cycle-child/life-cycle-child.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveMultipleFormComponent } from './reactive-multiple-form/reactive-multiple-form.component';
import { OuterCOneComponent } from './outer-c-one/outer-c-one.component';
import { OuterCTwoComponent } from './outer-c-two/outer-c-two.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProtectTestGuard } from './protect-test.guard';

const appRoutes: Routes = [
  {
    path: 'router1/:userId',
    component: OuterCOneComponent,
    data: {
      headingone: "hello"
    }
  },
  {
    path: 'lazyloading',
    loadChildren: './testing/testing.module#TestingModule'
  },
  {
    path: 'router2',
    canActivate: [ProtectTestGuard],
    component: OuterCTwoComponent
  },
  { path: '', redirectTo: 'router1', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

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
    NgIfExampleComponent,
    NgSwitchExampleComponent,
    WeatherDispalyComponent,
    LifeCycleComponent,
    LifeCycleChildComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    ReactiveMultipleFormComponent,
    OuterCOneComponent,
    OuterCTwoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false })
  ],
  providers: [ProtectTestGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
