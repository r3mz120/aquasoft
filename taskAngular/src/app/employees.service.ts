import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import {Employee} from "./employee"
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private employeesUrl = 'http://localhost:8081/api/employees';
  private deleteEmployeeUrl = 'http://localhost:8081/api/employees/delete';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }


  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.employeesUrl).pipe(
      tap(_ => this.log('fetched employees')),
      catchError(this.handleError<Employee[]>('getEmployees', []))
    );
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.employeesUrl + "/update", employee, this.httpOptions).pipe(
      tap(_ => this.log(`updated employee id=${employee.id}`)),
      catchError(this.handleError<any>('updateEmployee'))
    );
  }

  deleteEmployee(id: number): Observable<Employee> {
    const url = `${this.deleteEmployeeUrl}`;
    const deleteHttpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body:{id}
     
    };

    return this.http.delete<Employee>(url,deleteHttpOptions).pipe(
      tap(_ => this.log(`deleted employee id=${id}`)),
      catchError(this.handleError<Employee>('deleteEmployee'))
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
