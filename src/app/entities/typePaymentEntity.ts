import { baseEntity } from "./general/baseEntity";

export class typePaymentEntity extends baseEntity {
    constructor(documentId: string,name: string){
        super(documentId,name);
    }
}