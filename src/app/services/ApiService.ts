import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    // Vars
    private baseUrl = 'http://localhost:1337/api';

    constructor(public http: HttpClient) {}

    public getData(endpoint: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/${endpoint}`).pipe(
        catchError(this.handleError)
        );
    }

    public postData(endpoint: string, body: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/${endpoint}`, body).pipe(
        catchError(this.handleError)
        );
    }

    public updateData(endpoint: string, body: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/${endpoint}`, body).pipe(
        catchError(this.handleError)
        );
    }

    public deleteData(endpoint: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${endpoint}`).pipe(
        catchError(this.handleError)
        );
    }

    // Manejo de errores
    private handleError(error: HttpErrorResponse): Observable<never> {

        // Handle the error
        if (error.error instanceof ErrorEvent) {
            console.error('Error del lado del cliente:', error.error.message);
        } else {
            console.error(
                `Código de error del servidor: ${error.status}\n` +
                `Mensaje: ${error.message}`
            );
        }
        
        return throwError(() => new Error('Ocurrió un error, por favor intente nuevamente.'));
    }
}