import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Task} from '../../models/task';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input() task: Task;
  @ViewChild('card__body') collapsibleDiv;
  collapsed: boolean;

  constructor() {
    this.collapsed = false;
  }

  ngOnInit(): void {
  }

  handleChange(event): void {
    event.checked ? this.collapsibleDiv.nativeElement.style.display = 'block' : this.collapsibleDiv.nativeElement.style.display = 'none';
  }

}
