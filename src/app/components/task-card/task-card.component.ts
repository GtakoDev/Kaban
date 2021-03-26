import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Task} from '../../models/task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input() task: Task;
  @ViewChild('card__body') collapsibleDiv;
  @Output() open: EventEmitter<any> = new EventEmitter<any>();
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  collapsed: boolean;

  constructor() {
    this.collapsed = false;
  }

  ngOnInit(): void {
  }

  handleChange(event): void {
    if (event.checked) {
      this.collapsibleDiv.nativeElement.style.display = 'block';
      this.open.emit(`Ouverture de la carte "${ this.task.name }"`);
    } else {
      this.close.emit(`Fermeture de la carte "${ this.task.name }"`);
      this.collapsibleDiv.nativeElement.style.display = 'none';
    }
  }

}
