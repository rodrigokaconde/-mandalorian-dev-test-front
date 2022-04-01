import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private urlAddTask:string = "http://localhost:8080/add/task";

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient) { }

  addTask(task: Task){
    return this.http.post(this.urlAddTask, JSON.stringify(task), this.httpOptions);
  }

}
