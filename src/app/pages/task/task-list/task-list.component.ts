import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/shared/modal.service';
import { CrudService } from '../../../services/shared/crud.service';
import { Task } from '../../../models/task';
import { FormTaskService } from '../../../services/form-services/form-task.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  taskEnd: boolean = false;

  constructor(public _modalService: ModalService,
              public _crudService: CrudService,
              public _formTaskService: FormTaskService) { }

  ngOnInit(): void {
    this._crudService.refreshNeeded$.subscribe(() => {
      console.log('REFRESHH');
      this.getTasks();

    });
    this.getTasks();
  }

  mostrarUserRegModal(){
    this._formTaskService.clearForm();
    this._modalService.mostrarModalTask();
  }

  getTasks() {
    this._crudService.getAllObjects('get-tasks').subscribe(res => {
      this.tasks = res;
      console.log('TAREAS ', res);

    })
  }

  completed(u:Task){
    console.log('UUUU ', u);

    this.taskEnd = !u.completed;
    console.log('IS COMPLETED ', this.taskEnd);

    this._formTaskService.form.setValue(u);
    var dat = this._formTaskService.getDate(u.date);
    this._formTaskService.form.get('date').setValue(dat);
    var comp = this._formTaskService.getDate(u.completedDate);
    this._formTaskService.form.get('completedDate').setValue(comp);

    if(this.taskEnd){
      console.log('TERMINADA');

      this._formTaskService.form.get('status').setValue('Terminada');
      this._formTaskService.form.get('completed').setValue(true);

    }
    if (!this.taskEnd) {
      console.log('EN PROCESO');
      this._formTaskService.form.get('status').setValue('En Proceso');
      this._formTaskService.form.get('completed').setValue(false);

    }
    this._formTaskService.onSubmit();

  }

  deleteTask(u:Task){
    this._formTaskService.form.setValue(u);
    var dat = this._formTaskService.getDate(u.date);
    this._formTaskService.form.get('date').setValue(dat);
    var comp = this._formTaskService.getDate(u.completedDate);
    this._formTaskService.form.get('completedDate').setValue(comp);
    Swal.fire({
      title: 'Esta segur@?',
      text: "Al borrar los datos no se podran recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._formTaskService.onDelete();
        Swal.fire(
          'Deleted!',
          'Your data  has been deleted.',
          'success'
        )
      }
    })
  }

  edit(user){
    console.log('USER ', user);
    this._formTaskService.editTask(user);
    this._modalService.mostrarModalTask();

  }

}
