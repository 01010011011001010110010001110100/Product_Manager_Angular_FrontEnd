export class productModel {
    public documentId: string;
    public name: string;
    public detail: string;

    constructor(
        documentId: string,
        name: string,
        detail: string
    ) {
        this.documentId = documentId;
        this.name = name;
        this.detail = detail;
    }
}