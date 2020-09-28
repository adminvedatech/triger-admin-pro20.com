import { Injectable } from "@angular/core";
import { FormTaskService } from '../form-services/form-task.service';
import { FormUserService } from "../form-services/form-user.service";
import Swal from 'sweetalert2';

@Injectable({
  providedIn: "root",
})
export class ModalService {

  modalUpload = "ocultar";
  modalProveedor = "ocultar";
  modalProducto = "ocultar";
  modalUser = "ocultar";
  modalUserCard = "ocultar";
  modalTask="ocultar";
  tipo: string = "";
  url: string = "";

  constructor(public _formUser: FormTaskService) {}

  mostrarModalUpload(tipo: string, url: string) {
    this.modalUpload = "";
    this.tipo = tipo;
    this.url = url;
    console.log("tipo", this.tipo);
    console.log("url", this.url);
  }

  cerrarModalUpload() {
    this.modalUpload = "ocultar";
    console.log("modal Proveedor", this.modalProveedor);
  }

  mostrarModalProveedor(tipo: string, url: string) {
    this.modalProveedor = "";
    this.tipo = tipo;
    this.url = url;
    console.log("tipo", this.tipo);
    console.log("url", this.url);
  }

  cerrarModalProveedor() {
    this.modalProveedor = "ocultar";
    console.log("modal Proveedor", this.modalProveedor);
  }

  mostrarModalProducto(tipo: string, url: string) {
    this.modalProducto = "";
    this.tipo = tipo;
    this.url = url;
    console.log("tipo", this.tipo);
    console.log("url", this.url);
  }

  cerrarModalProducto() {
    this.modalProducto = "ocultar";
    console.log("modal Proveedor", this.modalProveedor);
  }

  mostrarModalUserRegister() {
    this.modalUser = "";
    // this.tipo = tipo;
    // this.url = url;
    // console.log("tipo", this.tipo);
    // console.log("url", this.url);
  }
      cerrarModalUserRegister() {
        this.modalUser = "ocultar";
        this._formUser.taskId = false;
        this._formUser.clearForm();
      }

  mostrarModalUserCard(tipo: string, url:string){

    this.modalUserCard = '';
    this.tipo = tipo;
    this.url = url;
    console.log('tipo', this.tipo);
    console.log('url', this.url);
  }

  cerrarModalUserCard(){
    this.modalUserCard = 'ocultar';
    this._formUser.clearForm();
  }

  mostrarModalTask() {

    this.modalTask = "";
    // this.tipo = tipo;
    // this.url = url;
    // console.log("tipo", this.tipo);
    // console.log("url", this.url);
  }

  cerrarModalTask(){
    console.log('OCULATAR TASK MODAL');
    this.modalTask = "ocultar";
    // this._formUser.clearForm();
    console.log('OCULATAR TASK MODAL', this.modalTask);
  }

}
