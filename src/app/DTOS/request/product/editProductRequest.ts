export class editProductRequest {
    public name: string;
    public detail: string;
    public typeCurrencyID: string;
    public typePaymentID: string;
    public implementationCost: number;
    public instalationCost: number;
    public regularPrice: number;
    public advancePrice: number;
    public isActive: boolean;
    public isDeleted: boolean;
    public updateOn: string;
    

    constructor(
        name: string,
        detail: string,
        typeCurrencyId: string,
        typePaymentId: string,
        implementationCost: number,
        instalationCost: number,
        regularPrice: number,
        advancePrice: number,
        isActive: boolean
      ) {
        this.name = name;
        this.detail = detail;
        this.typeCurrencyID = typeCurrencyId;
        this.typePaymentID =  typePaymentId;
        this.implementationCost = implementationCost;
        this.instalationCost = instalationCost;
        this.regularPrice = regularPrice;
        this.advancePrice = advancePrice;
        this.isActive =  isActive;
        this.isDeleted = false;
        this.updateOn = new Date().toISOString();
    }
}