//
/********************************************************************************************************/
/********************************************************************************************************/
/********************************************************************************************************/
/**************************Ejemplo de Busqueda en Proveedores********************************************/


// ejem: proveedor facturas: total>3000&fecha>2020/02/28&fecha<2020/03/01
// las fechas > es mayor o igual que, para total es igual
// name=fularno


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetService } from 'src/app/services/get-service/get-service.service';
import { ModalService } from 'src/app/services/shared/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchStr ="";
  eval:boolean = false;
  urlinvoiceQuery: string = '/invoice/students';


  constructor(
              private router: Router,
              private getService: GetService,
              private _modalService: ModalService) { }

  ngOnInit(): void {
    console.log('ROUTER ', this.router.url);

  }

  search(value:any){
    console.log("Valuer", value.target.value);
    console.log('ROUTER ', this.router.url);
    this.searchStr = value.target.value;
    this.evalSearchSupplier(this.searchStr);
    var obj = /proveedor/.exec(this.searchStr);
    console.log("Found " + obj![0] + " in position " + obj!.index + " in the text: " + obj!.input);
    var obj2 = /proveedor facturas/.test(this.searchStr);
    console.log('VALOR DE OBJ2 ', obj2);

   ;

  }


  evalSearchSupplier(valueStr: string){
    console.log('OBJ',valueStr);

    var re = new RegExp('proveedor+ facturas');
    console.log('VAR RE ', re.test(this.searchStr))
    if(re){
      console.log("VAMOS A BUSCAR FACTURAS PROVEEDOR");
      this.supplierInvoice();
    }

  }

  supplierInvoice(){

    var re = /(\w+)\s(\w+)\s(\w+)(\=)(\w+)/;
const str = this.searchStr;
const newbar = str.split(":");
const bar = newbar.slice(1);
console.log("SPLIT ", bar[0].trim());
var resultado = bar[0].trim().replace(/>/g, 'MayorQue=');
var resultado = resultado.trim().replace(/</g, 'MenorQue=');
var resultado = resultado.trim().replace(/>/g, 'MenorQue=');
var resultado = resultado.trim().replace(/</g, 'MenorQue=');
var resultado = resultado.trim().replace(/>/g, 'MenorQue=');
var resultado = resultado.trim().replace(/</g, 'MenorQue=');
var resultado = resultado.trim().replace(/>/g, 'MenorQue=');
var resultado = resultado.trim().replace(/</g, 'MenorQue=');






str.replace(re, '$2, $1, $3,$4,$5'); // "Smith, John"
RegExp.$1; // "John"
RegExp.$2; // "Smith"

console.log("ESTAMOS EN LA FUNCION DE SUPPLIER INVOICE", RegExp.$1, ':', RegExp.$2,':',
RegExp.$3,':',RegExp.$4+RegExp.$5);
const stringval = RegExp.$3 + RegExp.$4 + RegExp.$5;
console.log('STRING VAL ', stringval);
console.log('RESULTADO ',resultado);

    this.getService.getInvoiceByQuery(this.urlinvoiceQuery,resultado).subscribe(res => {
        console.log('RESULTADO DE BUSQUEDA ', res);
        this.router.navigate(['/proveedores/facturas-proveedores']);
    })

  }

  mostrarModal() {
    console.log('MOSTRAR MODAL');
    this._modalService.mostrarModalUserCard('user','user');

  }

}
