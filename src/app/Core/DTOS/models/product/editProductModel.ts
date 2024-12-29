import { typeCurrencyEntity } from "../../../entities/typeCurrencyEntity";
import { typePaymentEntity } from "../../../entities/typePaymentEntity";

export class editProductModel {
    public documentId: string = '';
    public name: string = '';
    public detail: string = '';
    public typeCurrencyId: string = '';
    public typePaymentId: string = '';
    public implementationCost: number = 0;
    public instalationCost: number = 0;
    public regularPrice: number = 0;
    public advancePrice: number = 0;
    public isActive: boolean = false;

    public listTypeCurrencies: typeCurrencyEntity[] = [];
    public listTypePayments: typePaymentEntity[] = [];
}