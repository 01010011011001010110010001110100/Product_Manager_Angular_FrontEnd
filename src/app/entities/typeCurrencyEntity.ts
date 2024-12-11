import { baseEntity } from "./general/baseEntity";

export class typeCurrencyEntity extends baseEntity{
    public ISO2: string;

    constructor(ID: number,name: string,ISO2: string) {
        super(ID,name);
        this.ISO2 = ISO2;
    }
}