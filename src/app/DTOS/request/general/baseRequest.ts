export class baseRequest {
    public documentId: string;
    public name: string;

    constructor(documentId: string, name: string) {
        this.documentId = documentId;
        this.name = name;
    }
}