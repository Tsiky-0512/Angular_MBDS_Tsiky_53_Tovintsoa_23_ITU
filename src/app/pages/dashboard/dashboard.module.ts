import { NgModule } from '@angular/core';
import { CommonModule,DatePipe  } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CardsModule, ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { AssignementComponent } from './assignement/assignement.component';

@NgModule({
  declarations: [DashboardComponent, AssignementComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        children : [
          {
            path:'assignement-list',
            component:AssignementComponent
          },
          {
            path:'',
            redirectTo:'assignement-list',
            pathMatch:'full'
          },
          {
            path:'**',
            redirectTo:'assignement-list',
            pathMatch:'full'
          }
        ],
      },
    ],
    ),
    WidgetsModule,
    CardsModule,
    ModalsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    InlineSVGModule
  ],
  providers:[
    DatePipe
  ]
})
export class DashboardModule {}
