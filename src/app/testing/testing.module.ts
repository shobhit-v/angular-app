import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmenuComponent } from './submenu/submenu.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildThreeComponent } from './child-three/child-three.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SubmenuComponent,
        children: [
          {
            path: 'child1',
            component: ChildOneComponent
          },
          {
            path: 'child2',
            component: ChildTwoComponent
          },
          {
            path: 'child3',
            component: ChildThreeComponent
          }
        ]
      }
    ])
  ],
  declarations: [SubmenuComponent, ChildOneComponent, ChildTwoComponent, ChildThreeComponent]
})
export class TestingModule { }
