import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, map, Observable, throwError } from "rxjs";
import { IGenericRepository } from "../../../Core/interfaces/repositories/common/IGenericRepository";
import { inject } from "@angular/core";


export class genericRepository<entity, request> implements IGenericRepository<entity, request> {

    // Vars
    protected http: HttpClient;
    protected baseUrl: string;
    protected endpoint: string;
    protected responseDataKey: string;

    constructor(
        baseUrl: string, 
        endpoint: string,
        responseDataKey: string
    ) {
        this.http = inject(HttpClient);
        this.baseUrl = baseUrl;
        this.endpoint = endpoint;
        this.responseDataKey = responseDataKey;
    }

    
    getData(documentId: string): Observable<entity | undefined> {
        return this.http.get(`${this.baseUrl}/${this.endpoint}/${documentId}`).pipe(
            map((response: any) => {
                const data = response[this.responseDataKey];
                if (data) {
                    return data as entity;
                } else {
                    return undefined;
                }
            }),
            catchError(this.handleError)
        );
    }


    postData(body: request): Observable<entity> {
        return this.http.post(`${this.baseUrl}/${this.endpoint}`, body).pipe(
            map((response: any) => response[this.responseDataKey] as entity),
            catchError(this.handleError)
        );
    }


    updateData(body: request, documentId: string): Observable<entity> {
        return this.http.put(`${this.baseUrl}/${this.endpoint}/${documentId}`, body).pipe(
            map((response: any) => response[this.responseDataKey] as entity),
            catchError(this.handleError)
        );
    }


    deleteData(documentId: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${this.endpoint}/${documentId}`).pipe(
            map((response: any) => response),
            catchError(this.handleError)
        );
    }


    getAllData(): Observable<entity[]> {
        return this.http.get(`${this.baseUrl}/${this.endpoint}`).pipe(
            map((response: any) => {
                const data = response[this.responseDataKey];
                if (data) {
                    return data as entity[];
                }
                else {
                    return [];
                }
            }),
            catchError(this.handleError)
        );
    }
    

    handleError(error: HttpErrorResponse): Observable<never> {
        // Handle the error
        if (error.error instanceof ErrorEvent) 
        {
            console.error('Error del lado del cliente:', error.error.message);
        } 
        else 
        {
            console.error(
                `Código de error del servidor: ${error.status}\n` +
                `Mensaje: ${error.message}`
            );
        }
        return throwError(() => new Error('Ocurrió un error, por favor intente nuevamente.'));
    }

}