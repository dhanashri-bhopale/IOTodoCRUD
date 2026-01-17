import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../../model/todo';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todoObj !: Array<Itodo>
@Output() emitRemoveId :EventEmitter<string> = new EventEmitter<string>()
  constructor(
    private _matDialog:MatDialog
  ) { }

  ngOnInit(): void {
  }

  trackById(index: number, todo: Itodo){
    return todo.todoId
  }

  onRemove(todo:Itodo){
    // console.log(todo)
    let matConfig = new MatDialogConfig();
    matConfig.width ="500px"
    matConfig.data =`Are you sure you want to remove todoItem with id ${todo.todoId}`
    matConfig.disableClose = true;
   let matDialogRef= this._matDialog.open(GetConfirmComponent,matConfig)
   matDialogRef.afterClosed()
   .subscribe(flag =>{
     if(flag){
       this.emitRemoveId.emit(todo.todoId)

    //   let getIndex = this.todoObj.findIndex(t=>{
    //     return t.todoId === todo.todoId
    //   })
    //   this.todoObj.splice(getIndex,1)
    

    }

   })
  }
}
