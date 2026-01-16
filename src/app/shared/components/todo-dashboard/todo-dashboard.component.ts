import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../model/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  constructor() { }

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

}
