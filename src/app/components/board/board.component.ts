import {Component, OnInit} from '@angular/core';
import Task from '../../models/task';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  tasks: Task[];

  todoTasks: Task[];

  doingTasks: Task[];

  doneTasks: Task[];

  draggedTask: Task;

  source: string;

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
    this.source = null;
  }

  // listeners to task events

  onOpen(message: string): void {
  console.log(message);
  }

  onClose(message: string): void {
    console.log(message);
  }

  onDragStart(value: any): void {
    this.draggedTask = value.task;
    this.source = value.source;
  }

  onDragEnd(): void {
    this.draggedTask = null;
    this.source = null;
  }

  onDrop(target: string): void {
    if (this.draggedTask) {
      console.log(`Dragged Task Source : ${ this.source }`);
      this.deleteDraggedTaskFromSourceArray();
      this.addDraggedTaskToTargetArray(target);
      this.draggedTask = null;
      this.source = null;
    }
  }

  private deleteDraggedTaskFromSourceArray(): void {
    switch (this.source) {
      case 'todo':
        this.todoTasks = this.todoTasks.filter((value) => value !== this.draggedTask);
        break;
      case 'doing':
        this.doingTasks = this.doingTasks.filter((value) => value !== this.draggedTask);
        break;
      case 'done':
        this.doneTasks = this.doneTasks.filter((value) => value !== this.draggedTask);
        break;
      default:
        alert('No Source Array Found !');
        break;
    }
  }

  private addDraggedTaskToTargetArray(target: string): void {
    switch (target) {
      case 'todo':
        this.todoTasks = [...this.todoTasks, this.draggedTask];
        break;
      case 'doing':
        this.doingTasks = [...this.doingTasks, this.draggedTask];
        break;
      case 'done':
        this.doneTasks = [...this.doneTasks, this.draggedTask];
        break;
      default:
        alert('No Target Array Found !');
        break;
    }
  }

}
