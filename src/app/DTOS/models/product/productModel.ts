export class productModel {
    public ID: number;
    public name: string;
    public detail: string;

    constructor(
        ID: number,
        name: string,
        detail: string
    ) {
        this.ID = ID;
        this.name = name;
        this.detail = detail;
    }
}