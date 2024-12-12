import { Observable } from "rxjs";

export interface IService<model, saveModel, editModel, entity> {
    // Methods
    getAll(): Observable<model[]>;
    get(documentId: string): Observable<entity | null>;
    add(saveModel: saveModel): Observable<any>;
    update(editModel: editModel): Observable<any>;
    delete(documentId: string) : Observable<any>;
}