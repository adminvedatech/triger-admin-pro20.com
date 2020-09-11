import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './services/auth/auth.guard';
import { PagesComponent } from './pages/pages.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ClientesComponent } from './clientes/clientes.component';



const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },

  { canActivate:[AuthGuard],
    path: 'register', component: RegisterComponent,
    data: {titulo: 'Almacen',expectedRol: ['admin'] }
  },
  {
    path: '',
    component: PagesComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),

  },
  {
    path: 'proveedores',
    component: ProveedoresComponent,
    loadChildren: () => import('./proveedores/proveedores.module').then(m => m.ProveedoresModule),

  },
  {
    path: 'clientes',
    component: ClientesComponent,
    loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule),

  },

  { path: '**', component: PagenofoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true, preloadingStrategy:PreloadAllModules });
