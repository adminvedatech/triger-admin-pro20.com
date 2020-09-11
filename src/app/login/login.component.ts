import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import {LoginUsuario} from '../models/login-usuario';
import { from } from 'rxjs';
import Swal from 'sweetalert2'
import { CrudService } from '../services/shared/crud.service';
import { AuthSessionService } from '../services/auth/auth-session.service';

declare function init_plugins() : void;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  roles: string[] = [];
  errMsj: string;


  constructor(private f: FormBuilder,
              private authservice: AuthService,
              private authsessionService: AuthSessionService,
              private _crudService: CrudService,
              private router: Router,
              private route:ActivatedRoute
              ) { }

  ngOnInit() {

    init_plugins();

    if(this.authservice.getJwtToken()){

    let usuario = this.authservice.getLoggedUSer();

      console.log('ESTA AHORA REGISTRADO');
      Swal.fire({
        text: 'Continuas Registrado como Usuario : ' + usuario})
      this.router.navigate(['']);
    }

    this.form = this.f.group({
      nombreUsuario: [''],
      password: ['']

    });
  }

  onSubmit() {
    console.log('VALUE FORM', this.form.value);

    // this.authservice.login(this.form.value).subscribe( res=> {
    //   res
    //   console.log('res');
    //   this.router.navigate(['/dashboard'])

    // });

    this._crudService.postObject(this.form.value, 'auth/login').subscribe(
      data => {
        console.log('DATA ', data);

        this.isLogged = true;
        this.isLoginFail = false;

        this.authsessionService.setToken(data.token);
        this.authsessionService.setUserName(data.nombreUsuario);
        this.authsessionService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        // this.toastr.success('Bienvenido ' + data.nombreUsuario, 'OK', {
        //   timeOut: 3000, positionClass: 'toast-top-center'
        // });
        this.router.navigate(['']);
      },
      err => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsj = err.error;
        // this.toastr.error(this.errMsj, 'Fail', {
        //   timeOut: 3000,  positionClass: 'toast-top-center',
        // });
        Swal.fire({
          icon: 'error',
          title: 'Error de Login',
          text: 'Error en el Usuario o Contraseña',
          // footer: '<a href>Why do I have this issue?</a>'
        });
      }
    );
  }


}
