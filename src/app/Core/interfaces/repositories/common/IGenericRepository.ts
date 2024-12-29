import { Observable } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

export interface IGenericRepository<entity, request> {
    getData(documentId: string): Observable<entity | undefined>;
    postData(body: request): Observable<entity>;
    updateData(body: request, documentId: string): Observable<entity>;
    deleteData(documentId: string): Observable<any>;
    getAllData(): Observable<entity[]>;
    handleError(error: HttpErrorResponse): Observable<never>;
}