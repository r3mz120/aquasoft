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
  
  constructor(private http: HttpClient) { }


  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.employeesUrl).pipe(
      tap(_ => this.log('fetched employees')),
      catchError(this.handleError<Employee[]>('getEmployees', []))
    );
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.employeesUrl + "/update", employee, {observe:'response'}).pipe(
      tap(_ => this.log(`updated employee id=${employee.id}`)),
      catchError(this.handleError<any>('updateEmployee'))
    );
  }

  deleteEmployee(id: number): Observable<any> {
    const url = `${this.deleteEmployeeUrl}`;
    const deleteHttpOptions :Object= {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body:{id},
      observe:'response'
     
    };

    return this.http.delete(url,deleteHttpOptions).pipe(
      tap(_ => this.log(`deleted employee id=${id}`)),
      catchError(this.handleError<any>('deleteEmployee'))
    );
  }

  
  addEmployee(employee: Employee): Observable<any> {
    return this.http.post(this.employeesUrl+"/add", employee,{observe:'response'} ).pipe(
      tap(_ => this.log(` employee added`)),
      catchError(this.handleError<any>('addEmployee'))
    )
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
