import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprasComponent } from './compras/compras.component';
import { ProveedoresComponent } from './proveedores.component';
import { SharedModule } from '../shared/shared.module';
import { PROVEEDORES_ROUTES } from './proveedores.routes';



@NgModule({
  declarations: [ProveedoresComponent,ComprasComponent],
  imports: [
    CommonModule,
    SharedModule,
    PROVEEDORES_ROUTES
  ]
})
export class ProveedoresModule { }
