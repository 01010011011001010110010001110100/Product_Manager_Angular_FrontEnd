import { Observable } from "rxjs";

export interface IGenericService<entity, createRequest, editRequest, simulateDeleteRequest> {
    get(documentId: string): Observable<entity | undefined>;
    add(createRequest: createRequest): Observable<entity>;
    update(editRequest: editRequest, documentId: string): Observable<entity>;
    delete(documentId: string) : Observable<any>;
    simulateDelete(simulateDeleteRequest: simulateDeleteRequest, documentId: string): Observable<entity>
    getAll(): Observable<entity[]>;
}