import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth/auth.guard';
import { PagesComponent } from './pages.component';
import { BancosComponent } from './bancos/bancos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MovimientosComponent } from './bancos/movimientos/movimientos.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';


const pagesRoutes: Routes = [
  {canActivate:[AuthGuard],
    path: '',
    component: DashboardComponent,
    data: {titulo: 'Dashboard',expectedRol: ['ROLE_ADMIN','ROLE_VENTAS','ROLE_ALMACEN','ROLE_PRODUCCION','ROLE_COMPARAS','ROLE_CONTA'] }

  },
  {canActivate:[AuthGuard],
    path: 'usuarios',
    component: ListaUsuariosComponent,
    data: {titulo: 'Usuarios',expectedRol: ['ROLE_ADMIN','ROLE_VENTAS','ROLE_ALMACEN','ROLE_PRODUCCION','ROLE_COMPARAS','ROLE_CONTA'] }

  },
  {canActivate:[AuthGuard],
    path: 'bancos',
    component: BancosComponent,
    data: {titulo: 'Bancos',expectedRol: ['ROLE_ADMIN','ROLE_VENTAS','ROLE_ALMACEN','ROLE_PRODUCCION','ROLE_COMPARAS','ROLE_CONTA'] }

  },
  {canActivate:[AuthGuard],
    path: 'bancos/movimientos',
    component:MovimientosComponent ,
    data: {titulo: 'Movimientso Bancarios',expectedRol: ['ROLE_ADMIN','ROLE_VENTAS','ROLE_ALMACEN','ROLE_PRODUCCION','ROLE_COMPARAS','ROLE_CONTA'] }

  },
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
