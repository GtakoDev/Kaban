import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Task} from '../models/task';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskUrl = 'api/tasks';

  constructor(private http: HttpClient) {
  }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl)
      .pipe(
        tap(_ => console.log('fetched tasks')),
        catchError(this.handleError<Task[]>('getTasks', []))
      );
  }

  public getTask(id: number): Observable<Task> {
    const url = `${this.taskUrl}/${id}`;
    return this.http.get<Task>(url).pipe(
      tap(_ => console.log(`fetched task id = ${id}`)),
      catchError(this.handleError<Task>(`getTask id = ${id}`))
    );
  }

  public createTask(task: Task): Observable<any> {
    return this.http.post(this.taskUrl, task)
      .pipe(
        tap( _ => console.log('created task')),
        catchError(this.handleError<Task>(`createTask  = ${ task }`))
      );
  }

  public deleteTask(id: number): Observable<any> {
    const url = `${this.taskUrl}/${id}`;
    return this.http.delete(url).pipe(
      tap( _ => console.log(`deleted task id = ${id}`)),
      catchError(this.handleError<Task>(`deleteTask id = ${id}`))
    );
  }

  public updateTask(task: Task): Observable<any> {
    return this.http.put(this.taskUrl, task)
      .pipe(
        tap( _ => console.log('updated task')),
        catchError(this.handleError<Task>(`updateTask  = ${ task }`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed : ${error.message}`);
      return of(result);
    };
  }
}
