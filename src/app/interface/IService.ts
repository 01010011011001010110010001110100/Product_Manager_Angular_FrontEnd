import { Observable } from "rxjs";

export interface IService<model, saveModel, entity> {
    // Methods
    getAll(): model[];
    get(ID: number): entity;
    add(entity: saveModel): Observable<any>;
    update(entity: saveModel): Observable<any>;
    delete(ID: number) : Observable<any>;
}