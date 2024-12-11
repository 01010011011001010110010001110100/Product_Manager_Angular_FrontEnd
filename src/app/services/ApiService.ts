import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    // Vars
    private baseUrl = 'https://localhost:';

    constructor(private http: HttpClient) {}

    public getData(endpoint: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/${endpoint}`);
    }

    public postData(endpoint: string, body: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/${endpoint}`, body);
    }

    public updateData(endpoint: string, body: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/${endpoint}`, body);
    }

    public deleteData(endpoint: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${endpoint}`);
    }
}