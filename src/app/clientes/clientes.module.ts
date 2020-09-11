import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasComponent } from './ventas/ventas.component';
import { ClientesComponent } from './clientes.component';
import { CLIENTES_ROUTES } from './clientes.routes';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ClientesComponent,VentasComponent],
  imports: [
    CommonModule,
    SharedModule,
    CLIENTES_ROUTES
  ]
})
export class ClientesModule { }
