import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Appointment } from '../appointment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppointmentDataService {
  endpoint = 'https://residencia-55e35-default-rtdb.firebaseio.com';
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  addAtendimento(atendimento: Appointment) {
    this.http
      .post(this.endpoint + '/appointments.json', atendimento)
      .subscribe((response) => {
        console.log(response);
      });
  }

  getAtendimentos(): Observable<Appointment[]>{
    return this.http
      .get<Appointment[]>(this.endpoint + '/appointments.json')
      .pipe(retry(2), catchError(this.handleError));
  }

  getAtendimento(id: string): Observable<Appointment> {
    return this.http
      .get<Appointment>(this.endpoint + `/appointments/${id}.json`)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateAtendimento(app: Appointment) {
    return this.http
      .put<Appointment>(this.endpoint + `/appointments/${app.id}.json`, app, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }

    return throwError(() => new Error('errorMessage'));
  }
}
