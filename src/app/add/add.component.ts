import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task';
import { TaskServiceService } from '../service/task-service.service';

@Component({
  selector: 'ivory-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  task: Task = new Task;

  constructor(private taskService: TaskServiceService) { }

  ngOnInit(): void {
  }


  addTask(){
    this.taskService.addTask(this.task);
  }

  clearForm(){
    this.task.title='';
    this.task.description='';
  }
}
