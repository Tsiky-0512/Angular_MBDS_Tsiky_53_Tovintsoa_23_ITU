import { NgModule } from '@angular/core';
import { CommonModule,DatePipe  } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CardsModule, ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { AssignementListComponent } from './assignements/assignement-list/assignement-list.component';
import { AssignementCreateComponent } from './assignements/assignement-create/assignement-create.component';
import { AssignementsAddComponent } from './assignements/assignement-create/assignements-add/assignements-add.component';
import { StudentAddComponent } from './assignements/assignement-create/student-add/student-add.component';

@NgModule({
  declarations: [DashboardComponent, AssignementListComponent, AssignementCreateComponent, AssignementsAddComponent, StudentAddComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        children : [
          {
            path:'assignement-list',
            component:AssignementListComponent
          },
          {
            path:'assignement-create',
            component:AssignementCreateComponent
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
