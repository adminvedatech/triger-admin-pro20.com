import { NgModule } from '@angular/core';
import { BredcrumbsComponent } from './bredcrumbs/bredcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {ModalIconComponent } from '../modals/modal-icon/modal-icon.component';
import { FormUserRegisterComponent } from '../modals/modal-user-register/form-user-register/form-user-register.component';
import { ModalUserRegisterComponent } from '../modals/modal-user-register/modal-user-register.component';
import { ModalUserCardComponent } from '../modals/modal-user-card/modal-user-card.component';
import { ModalTaskComponent } from '../modals/modal-task/modal-task.component';
import { FormTaskComponent } from '../modals/modal-task/form-task/form-task.component';



@NgModule({
  declarations: [
    BredcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    ModalIconComponent,
    ModalUserRegisterComponent,
    FormUserRegisterComponent,
    ModalUserCardComponent,
    ModalTaskComponent,
    FormTaskComponent
  ],
  exports:[
    BredcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    ModalIconComponent,
    ModalUserRegisterComponent,
    FormUserRegisterComponent,
    ModalUserCardComponent,
    ModalTaskComponent,
    FormTaskComponent
  ],

  imports:[
      RouterModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,

  ],


})
export class SharedModule { }
