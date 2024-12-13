export class deleteProductModel {
    public documentId: string;
    public name: string;

    constructor(...args : []  | [documentId: string, name: string]) 
    {
        if (args.length === 0) {
            this.documentId = '';
            this.name = '';
        } 
        else {
            [this.documentId, this.name] = args;
        }
    }
}