import { Observable } from "rxjs";

export interface IService<model, saveModel, editModel,deleteModel, entity> {
    // Methods
    getAll(): Observable<model[]>;
    get(documentId: string): Observable<entity | null>;
    add(saveModel: saveModel): Observable<any>;
    update(editModel: editModel): Observable<any>;
    delete(deleteModel: deleteModel) : Observable<any>;
}