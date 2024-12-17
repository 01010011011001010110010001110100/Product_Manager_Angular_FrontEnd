import { typeCurrencyEntity } from "../../../entities/typeCurrencyEntity";
import { typePaymentEntity } from "../../../entities/typePaymentEntity";

export class createProductModel {
    public name: string = '';
    public detail: string = '';
    public typeCurrencyId: string = '';
    public typePaymentId: string = '';
    public implementationCost: number = 0;
    public instalationCost: number = 0;
    public regularPrice: number = 0;
    public advancePrice: number = 0;

    public listTypeCurrencies: typeCurrencyEntity[] = [];
    public listTypePayments: typePaymentEntity[] = [];
}