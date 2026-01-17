import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../model/todo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  constructor(
    private _snackBar:MatSnackBar
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

  getNewTodo(todo:Itodo){
    this.todoArr.unshift(todo)
    this._snackBar.open(`The to item with id ${todo.todoId} is added successfully!!`,'Close',
      {
        horizontalPosition:'left',
        verticalPosition:'top',
        duration:3000
      }
    )
  }

  getRemoveId(id:string){
   let getIndex = this.todoArr.findIndex(t=>t.todoId == id)
   this.todoArr.splice(getIndex,1)
   this._snackBar.open(`Do you want to remove todoItem with id${id}`,'Close',{
    horizontalPosition:'left',
    verticalPosition:'top',
    duration:3000
   }
   )
  }
}
