import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { InviteUsersModalComponent } from './invite-users-modal/invite-users-modal.component';
import { MainModalComponent } from './main-modal/main-modal.component';
import { UpgradePlanModalComponent } from './upgrade-plan-modal/upgrade-plan-modal.component';
import { ModalComponent } from './modal/modal.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { InsertBrandComponent } from './insert-brand-modal/insert-brand.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsertModelComponent } from './insert-model-modal/insert-model.component';

@NgModule({
  declarations: [
    InviteUsersModalComponent,
    MainModalComponent,
    UpgradePlanModalComponent,
    ModalComponent,
    InsertBrandComponent,
    InsertModelComponent
  ],
  imports: [CommonModule, InlineSVGModule, RouterModule, NgbModalModule,ReactiveFormsModule,FormsModule],
  exports: [
    InviteUsersModalComponent,
    MainModalComponent,
    UpgradePlanModalComponent,
    ModalComponent,
    InsertBrandComponent,
    InsertModelComponent
  ],
  providers:[
    
  ]
})
export class ModalsModule {}
