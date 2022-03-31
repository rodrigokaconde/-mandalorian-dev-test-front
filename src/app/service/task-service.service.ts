import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private urlAddTask:string = "http://localhost:8080/add/task";

  constructor(private http: HttpClient) { }

  addTask(task: Task){
    console.log(JSON.stringify(task));
    return this.http.post(this.urlAddTask, JSON.stringify(task));
  }
}
