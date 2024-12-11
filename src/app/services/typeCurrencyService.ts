import { IService } from "../interface/IService";
import { typeCurrencyEntity } from "../models/typeCurrencyEntity";

export class typeCurrencyService implements IService<typeCurrencyEntity> {

    constructor() {

    }

    getAll(): typeCurrencyEntity[] {
        throw new Error("Method not implemented.");
    }

    get(): typeCurrencyEntity {
        throw new Error("Method not implemented.");
    }
    
    add(entity: typeCurrencyEntity): void {
        throw new Error("Method not implemented.");
    }

    update(entity: typeCurrencyEntity): void {
        throw new Error("Method not implemented.");
    }

    delete(ID: number): void {
        throw new Error("Method not implemented.");
    }
}