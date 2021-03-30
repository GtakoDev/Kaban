import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Task from '../../models/task';

@Component({
  selector: 'app-task-column',
  templateUrl: './task-column.component.html',
  styleUrls: ['./task-column.component.css']
})
export class TaskColumnComponent implements OnInit {

  @Output() dragStart = new EventEmitter<any>();

  @Output() dragEnd = new EventEmitter<any>();

  @Output() drop = new EventEmitter<string>();

  @Input()
  title: string;

  @Input()
  tasks: Task[];

  constructor() {
  }

  ngOnInit(): void {
  }

  // listeners to task events
  onOpen(message: string): void {
    console.log(message);
  }

  onClose(message: string): void {
    console.log(message);
  }

  // Draggable events
  onDragStart(task: Task): void {
    this.dragStart.emit({ task, source: this.title } );
  }

  onDragEnd(): void {
    this.dragEnd.emit(null);
  }

  onDrop(): void {
    console.log(`Drop in ${this.title}`);
    this.drop.emit(this.title);
  }
}
