import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todoObj !: Array<Itodo>

  @Output() emitEditTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()

  constructor() { }

  ngOnInit(): void {
  }

  trackById(index: number, todo: Itodo){
    return todo.todoId
  }


  onEditTodo(t : Itodo){
    this.emitEditTodo.emit(t)
  }

}
