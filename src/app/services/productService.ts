import { IService } from "../interface/IService";
import { productEntity } from "../models/productEntity";
import { ApiService } from "./ApiService";

export class productService implements IService<productEntity>{

    constructor(private apiService: ApiService) {}

    getAll(): productEntity[] {
        throw new Error("Method not implemented.");
    }

    get(): productEntity {
        throw new Error("Method not implemented.");
    }
    
    add(entity: productEntity): void {
        throw new Error("Method not implemented.");
    }

    update(entity: productEntity): void {
        throw new Error("Method not implemented.");
    }

    delete(ID: number): void {
        throw new Error("Method not implemented.");
    }
}