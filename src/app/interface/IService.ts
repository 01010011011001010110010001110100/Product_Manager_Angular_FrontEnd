import { ApiService } from "../services/ApiService";

export interface IService<T> {
    // Methods
    getAll(): T[];
    get(ID: number): T;
    add(entity: T): void;
    update(entity: T): void;
    delete(ID: number) : void;
}