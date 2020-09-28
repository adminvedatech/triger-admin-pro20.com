import { Injectable } from '@angular/core';
import { Task } from '../../models/task';

import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '../shared/crud.service';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { UploadService } from '../shared/upload.service';

@Injectable({
  providedIn: 'root'
})
export class FormTaskService {

  tasks: NuevoUsuario[] = [];
  date:string;
  oculto: string = '';
  taskId: boolean = false;
  name: string = '';
  text: string = '';
  select: boolean = false;
  selectedFile: File;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 }
  type: string = '';
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  passwordConfirm: string = '';

  constructor(public _formBuilder: FormBuilder,
    public _upload: UploadService,
    public _crud: CrudService,
    private _router: Router) {
    this.taskId = false;
  }


  form: FormGroup = this._formBuilder.group({
    id: [''],
    task: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
    asignedTo: ['', Validators.required],
    status: ['', Validators.required],
    priority: ["", Validators.required],
    date: ["", Validators.required],
    completedDate: ['', Validators.required],
    completed: ['']

  });


  obtenerUsuarios() {
    return this._crud.getAllObjects('usuarios/get-usuarios').subscribe(res => {
      console.log('LISTA DE USUARIOS ', res);
      this.tasks = res;

    });
  }

  editTask(task: any) {

    this.taskId = true;

    this.form.get('id')!.setValue(task.id);
    this.form.get('task')!.setValue(task.task);
    this.form.get('asignedTo')!.setValue(task.asignedTo);
    this.form.get('status')!.setValue(task.status);
    this.form.get('priority')!.setValue(task.priority);
    // var time = new Date().getTime();
    var date = this.getDate(task.date);
    var completedDate = this.getDate(task.completedDate);
    this.form.get('date').setValue(date);
    this.form.get('completedDate').setValue(completedDate);
    this.form.get('completed')!.setValue(task.completed);
    // this.form.get('roles')!.setValue(task.roles);
    // this.form.get('photoName')!.setValue(task.photoName);
    console.log('FORM EDIT', this.form.value);


  }

  onSubmit() {
    console.log('FORM SUBMIT ', this.form.value);
     this._crud.createObject(this.form.value, 'task/new').subscribe(res => {
       console.log('Respuesta', res);
       this.tasks = res;
         Swal.fire({
          icon: 'success',
          title: 'Nueva Tarea',
          text: 'Tarea se agrego en la Base de Datos',
          // footer: '<a href>Why do I have this issue?</a>'

        });
        this.clearForm();
     })



  }

  onEdit() {
    console.log('ON EDIT ', this.form.value);
     this._crud.createObject(this.form.value, 'task/new').subscribe(res => {
      console.log('Respuesta', res);
      this.tasks = res;
      Swal.fire({
        icon: 'success',
        title: 'Tarea Actualizada',
        text: 'Tarea Actualizada en la Base de Datos',
        // footer: '<a href>Why do I have this issue?</a>'

      });
      this.clearForm();
    })
  }

  onDelete() {
    console.log('ON EDIT ', this.form.value);
     this._crud.createObject(this.form.value, 'task/delete').subscribe(res => {
      console.log('Respuesta', res);
      this.tasks = res;
      Swal.fire({
        icon: 'success',
        title: 'Tarea Borrada',
        text: 'Tarea Borrada en la Base de Datos',
        // footer: '<a href>Why do I have this issue?</a>'

      });
      this.clearForm();
    })
  }


  clearForm() {
    this.taskId = false;
    this.form.reset();
    console.log('FORM EDIT', this.form.value);
  }

  getDate(date) {
    var parts = date.split("/")
    console.log('PARTS ', parts);

    return new Date(parts[2], parts[0]-1, parts[1]).toISOString().substring(0,10);
  }


}
