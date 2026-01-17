import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../model/todo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  editTodo !: Itodo

  constructor(
    private _snackBar : MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  todoArr: Array<Itodo> = [
    {
      todoItem : 'JavaScript',
      todoId : '122'
    },
    {
      todoItem : 'Angular',
      todoId : '123'
    },
    {
      todoItem : 'RxJs',
      todoId : '124'
    },
    {
      todoItem : 'NodeJs',
      todoId : '125'
    }
  ]

  getEditTodo(todo : Itodo) {
    this.editTodo = todo
  }

  getUpdateTodo(todo : Itodo){
    let getIndex = this.todoArr.findIndex(t => t.todoId === todo.todoId)
    this.todoArr[getIndex] = todo

    this._snackBar.open(`The todoitem is updated successfully !!!`,
      "Close",{
        horizontalPosition : 'left',
        verticalPosition : 'bottom',
        duration : 3000
      }
    )
  }

}
