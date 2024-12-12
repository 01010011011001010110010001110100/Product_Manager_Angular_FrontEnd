import { baseEntity } from "./general/baseEntity";

export class typeCurrencyEntity extends baseEntity{
    public ISO2: string;

    constructor(documentId: string,name: string,ISO2: string) {
        super(documentId,name);
        this.ISO2 = ISO2;
    }
}