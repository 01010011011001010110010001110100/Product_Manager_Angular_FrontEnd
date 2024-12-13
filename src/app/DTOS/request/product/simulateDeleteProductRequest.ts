export class simulateDeleteProductRequest {
    public isActive: boolean;
    public isDeleted: boolean;
    public deletedOn: string;

    constructor() {
        this.isActive = false;
        this.isDeleted = true;
        this.deletedOn = new Date().toISOString();
    }
}