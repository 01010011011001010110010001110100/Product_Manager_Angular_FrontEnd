import { IService } from "../interface/IService";
import { typePaymentEntity } from "../models/typePaymentEntity";

export class typePaymentService implements IService<typePaymentEntity> {

    constructor() {

    }

    getAll(): typePaymentEntity[] {
        throw new Error("Method not implemented.");
    }

    get(): typePaymentEntity {
        throw new Error("Method not implemented.");
    }
    
    add(entity: typePaymentEntity): void {
        throw new Error("Method not implemented.");
    }

    update(entity: typePaymentEntity): void {
        throw new Error("Method not implemented.");
    }

    delete(ID: number): void {
        throw new Error("Method not implemented.");
    }
}