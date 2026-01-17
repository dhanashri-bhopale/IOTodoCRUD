import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../model/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {
  @ViewChild('todoForm') todoForm !: NgForm
  isInEditMode : boolean = false
  @Input() getEditTodos !: Itodo

  @Output() emitUpdateTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!!changes['getEditTodos']['currentValue']){
      this.isInEditMode = true
      this.todoForm.form.patchValue(changes['getEditTodos']['currentValue'])
    }
  }

  onUpdateTodo(){
    if(this.todoForm.valid){
      let updated_obj : Itodo = {
        ...this.todoForm.value,
        todoId : this.getEditTodos.todoId
      }
      this.emitUpdateTodo.emit(updated_obj)
      this.isInEditMode = false
      this.todoForm.reset()
    }
  }

}
