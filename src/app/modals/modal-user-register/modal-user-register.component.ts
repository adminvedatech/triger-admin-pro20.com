import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/shared/modal.service';
declare function init_plugins() : void;

@Component({
  selector: 'app-modal-user-register',
  templateUrl: './modal-user-register.component.html',
  styleUrls: ['./modal-user-register.component.css']
})
export class ModalUserRegisterComponent implements OnInit {

  public title: string = 'Registrar nuevo usuario'
  public categories: any[] = [];
  public subcategories: any[]= [];

  oculto:string = '';
  name:string='';
  text : string= '';
  select: boolean = false;
  selectedFile: File;
  currentFileUpload: File;
  progress: {percentage:number}= {percentage:0}
  type: string = '';

  constructor(public _modalService: ModalService) { }

  ngOnInit(): void {
    init_plugins();
  }
}
