import { baseEntity } from "./common/baseEntity";

export class typePaymentEntity extends baseEntity {
    constructor(documentId: string,name: string){
        super(documentId,name);
    }
}