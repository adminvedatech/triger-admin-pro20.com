import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/shared/modal.service';
import { CrudService } from 'src/app/services/shared/crud.service';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios: NuevoUsuario[] = [];

  constructor(public _modalService: ModalService,
              public _crudService: CrudService) { }

  ngOnInit(): void {
    this._crudService.refreshNeeded$.subscribe(() => {
      console.log('REFRESHH');
      this.getUsuarios();

    });
    this.getUsuarios();
  }

  mostrarUserRegModal(){
    this._modalService.mostrarModalUserRegister();
  }

  getUsuarios() {
    this._crudService.getAllObjects('usuarios/get-usuarios').subscribe(res => {
      this.usuarios = res;
      console.log('USUARIOS ', res);

    })
  }

  deshabilitarUsuario(u){

  }

}