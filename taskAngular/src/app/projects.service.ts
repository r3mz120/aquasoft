import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import {Project} from "./project"
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectsUrl = 'http://localhost:8081/api/projects';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  getProjects():Observable<Project[]>{
    return this.http.get<Project[]>(this.projectsUrl).pipe(
      tap(_ => this.log('fetched projects')),
      catchError(this.handleError<Project[]>('getProjects', []))
    );
  }

  private log(message: string) {
   console.log(message)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
