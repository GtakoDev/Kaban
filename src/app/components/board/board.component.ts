import {Component, OnInit} from '@angular/core';
import {TreeDragDropService} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {Task} from '../../models/task';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  providers: [TreeDragDropService, MessageService],
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  tasks: Task[];

  todoTasks: Task[];

  doingTasks: Task[];

  doneTasks: Task[];

  draggedTask: Task;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTasks()
      .subscribe( listOfTask => this.tasks = listOfTask );
    this.taskService.getTasks()
      .subscribe(listOfTasks => this.todoTasks = listOfTasks);
    this.todoTasks = [];
    this.doingTasks = [];
    this.doneTasks = [];
  }

  // Draggable events

  dragStart(task: Task): void {
    this.draggedTask = task;
  }

  dragEnd(): void {
    this.draggedTask = null;
  }

  // Droppable events

  dropInTodo(): void {
    console.log('Dropping in Todo');
    if (this.draggedTask) {
      const sourceArray = this.getDraggedTaskSourceArray();
      console.log(`Dragged Task Source :\n TodoTasks (${sourceArray.isTodo}) \n DoingTasks (${sourceArray.isDoing}) \n DoneTasks (${sourceArray.isDone})`);
      this.deleteDragTaskFromSourceArray(sourceArray);
      this.todoTasks = [...this.todoTasks, this.draggedTask];
      this.draggedTask = null;
      console.log('Dropping in Todo [SUCCESS]');
    }
  }

  dropInDoing(): void {
    console.log('Dropping in Doing');
    if (this.draggedTask) {
      const sourceArray = this.getDraggedTaskSourceArray();
      console.log(`Dragged Task Source :\n TodoTasks (${sourceArray.isTodo}) \n DoingTasks (${sourceArray.isDoing}) \n DoneTasks (${sourceArray.isDone})`);
      this.deleteDragTaskFromSourceArray(sourceArray);
      this.doingTasks = [...this.doingTasks, this.draggedTask];
      this.draggedTask = null;
      console.log('Dropping in Doing [SUCCESS]');
    }
  }

  dropInDone(): void {
    console.log('Dropping in Done');
    if (this.draggedTask) {
      const sourceArray = this.getDraggedTaskSourceArray();
      console.log(`Dragged Task Source :\n TodoTasks (${sourceArray.isTodo}) \n DoingTasks (${sourceArray.isDoing}) \n DoneTasks (${sourceArray.isDone})`);
      this.deleteDragTaskFromSourceArray(sourceArray);
      this.doneTasks = [...this.doneTasks, this.draggedTask];
      this.draggedTask = null;
      console.log('Dropping in Done [SUCCESS]');
    }
  }

  private getDraggedTaskSourceArray(): { isTodo: boolean, isDoing: boolean, isDone: boolean } {
    return {
      isTodo: this.todoTasks.includes(this.draggedTask),
      isDoing: this.doingTasks.includes(this.draggedTask),
      isDone: this.doneTasks.includes(this.draggedTask)
    };
  }

  private deleteDragTaskFromSourceArray(sourceBoolean: { isTodo: boolean, isDoing: boolean, isDone: boolean }): void {
    if (sourceBoolean.isTodo) {
      this.todoTasks = this.todoTasks.filter((value) => value !== this.draggedTask);
    } else if (sourceBoolean.isDoing) {
      this.doingTasks = this.doingTasks.filter((value) => value !== this.draggedTask);
    } else if (sourceBoolean.isDone) {
      this.doneTasks = this.doneTasks.filter((value) => value !== this.draggedTask);
    }
  }

}
