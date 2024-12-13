export class createProductRequest {
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
    public createdOn: string;
    

    constructor(
        name: string,
        detail: string,
        typeCurrencyId: string,
        typePaymentId: string,
        implementationCost: number,
        instalationCost: number,
        regularPrice: number,
        advancePrice: number,
      ) {
        this.name = name;
        this.detail = detail;
        this.typeCurrencyID = typeCurrencyId;
        this.typePaymentID =  typePaymentId;
        this.implementationCost = implementationCost;
        this.instalationCost = instalationCost;
        this.regularPrice = regularPrice;
        this.advancePrice = advancePrice;
        this.isActive = true;
        this.isDeleted = false;
        this.createdOn = new Date().toISOString();
    }
}