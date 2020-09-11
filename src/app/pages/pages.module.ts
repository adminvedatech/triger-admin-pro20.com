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



@NgModule({
  declarations: [
    PagesComponent,
    BancosComponent,
    UsuariosComponent,
    ListaUsuariosComponent,
    MovimientosComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES
  ],
  exports: [

    ]
})
export class PagesModule { }
