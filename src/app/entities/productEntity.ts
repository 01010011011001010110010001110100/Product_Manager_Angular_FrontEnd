import { baseEntity } from "./general/baseEntity";
import { typeCurrencyEntity } from "./typeCurrencyEntity";
import { typePaymentEntity } from "./typePaymentEntity";

export class productEntity extends baseEntity{
    public detail: string;
    public typeCurrencyId: string;
    public typePaymentId: string;
    public implementationCost: number;
    public instalationCost: number;
    public regularPrice: number;
    public advancePrice: number;
    public isActive: boolean;
    public isDeleted: boolean;
    public createdOn: Date;
    public updatedOn?: Date;
    public deletedOn?: Date;

    // Navegation Property
    public typeCurrency?: typeCurrencyEntity;
    public typePayment?: typePaymentEntity;
    

    constructor(
        documentId: string,
        name: string,
        detail: string,
        typeCurrencyId: string,
        typePaymentId: string,
        implementationCost: number,
        instalationCost: number,
        regularPrice: number,
        advancePrice: number,
        isActive: boolean,
        isDeleted: boolean,
        createdOn: Date,
        updatedOn: Date | undefined,
        deletedOn: Date | undefined,
        createdByUserId: number
      ) {
        super(documentId,name);
        this.detail = detail;
        this.typeCurrencyId = typeCurrencyId;
        this.typePaymentId = typePaymentId;
        this.implementationCost = implementationCost;
        this.instalationCost = instalationCost;
        this.regularPrice = regularPrice;
        this.advancePrice = advancePrice;
        this.isActive = isActive;
        this.isDeleted = isDeleted;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
        this.deletedOn = deletedOn;
    }
    
}