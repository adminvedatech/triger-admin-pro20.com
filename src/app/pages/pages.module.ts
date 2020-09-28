import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { BancosComponent } from './bancos/bancos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MovimientosComponent } from './bancos/movimientos/movimientos.component';
import { ModalUserRegisterComponent } from '../modals/modal-user-register/modal-user-register.component';
import { ModalUserCardComponent } from '../modals/modal-user-card/modal-user-card.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { FormTaskService } from '../services/form-services/form-task.service';
import { FormUserService } from '../services/form-services/form-user.service';



@NgModule({
  declarations: [
    PagesComponent,
    BancosComponent,
    UsuariosComponent,
    ListaUsuariosComponent,
    MovimientosComponent,
    TaskComponent,
    TaskListComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES
  ],
  exports: [

    ],
  providers: [
    FormTaskService,
    FormUserService
  ]
})
export class PagesModule { }
