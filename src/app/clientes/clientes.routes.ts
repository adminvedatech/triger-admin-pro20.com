import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth/auth.guard';
import { VentasComponent } from './ventas/ventas.component';


const clientesRoutes: Routes = [
  {canActivate:[AuthGuard],
    path: 'ventas',
    component: VentasComponent,
    data: {titulo: 'Dashboard',expectedRol: ['ROLE_ADMIN','ROLE_VENTAS','ROLE_ALMACEN','ROLE_PRODUCCION','ROLE_COMPARAS','ROLE_CONTA'] }

  }
];


export const CLIENTES_ROUTES = RouterModule.forChild( clientesRoutes );
