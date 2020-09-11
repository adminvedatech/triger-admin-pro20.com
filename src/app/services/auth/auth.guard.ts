import { Injectable, LOCALE_ID } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthSessionService } from './auth-session.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  realRol: string;
  userName: string;

  constructor(private authSessionService: AuthSessionService, private router: Router, private auth: AuthService) { }




  //   if (!this.tokenService.getToken() || expectedRol.indexOf(this.realRol) === -1) {
  //     this.router.navigate(['/']);
  //     return false;
  //   }
  //   return true;
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

    const expectedRol = route.data.expectedRol;
    const roles  = this.authSessionService.getAuthorities();
    this.userName = this.authSessionService.getUserName();
    this.realRol = 'user';
    roles.forEach((rol: string) => {
      if (rol === 'ROLE_ADMIN') {
        this.realRol = 'admin';
      }
    });

    if (!this.authSessionService.getToken()) {

      this.router.navigate(['/login']);
      return false;
    }

    for (let index = 0; index < expectedRol.length; index++) {

      for (let jndex = 0; jndex < roles.length; jndex++) {

        console.log('EXPECTED ROL ', expectedRol[index]);


        if (expectedRol[index].indexOf(roles[jndex]) > -1) {

          return true;
        }

     }

    }

  // if (expectedRol.indexOf(this.realRol) === -1) {
  //   console.log('IF SESSION');

    Swal.fire({
      text: 'El Usuario : ' + this.userName + ' no tiene Credenciales'})
      // this.router.navigate(['/dashboard']);

  //   return false;
  // }
  return false;
 }
}
