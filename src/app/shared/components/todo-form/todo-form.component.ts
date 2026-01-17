import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../model/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoForm') todoForm !: NgForm

  @Output() emitNewTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  isInEditMode : boolean = false

  constructor() { }

  ngOnInit(): void {
  }


    onTodoAdd(){ 
    if(this.todoForm.valid){
        let todo:Itodo={
      ...this.todoForm.value,
      todoId:Date.now().toString()
    }
    console.log(todo)
    this.todoForm.reset()
    this.emitNewTodo.emit(todo)
    }
  }

}
