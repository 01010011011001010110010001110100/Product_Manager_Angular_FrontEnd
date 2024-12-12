import { typeCurrencyEntity } from "../../../entities/typeCurrencyEntity";
import { typePaymentEntity } from "../../../entities/typePaymentEntity";

export class saveProductModel {
    public name: string;
    public detail: string;
    public typeCurrencyId: string;
    public typePaymentId: string;
    public implementationCost: number;
    public instalationCost: number;
    public regularPrice: number;
    public advancePrice: number;

    public listTypeCurrencies: typeCurrencyEntity[];
    public listTypePayments: typePaymentEntity[];

    constructor(...args : 
      []  |
      [
        name: string,
        detail: string,
        typeCurrencyId: string,
        typePaymentId: string,
        implementationCost: number,
        instalationCost: number,
        regularPrice: number,
        advancePrice: number,
        typeCurrencys: typeCurrencyEntity[],
        typePayments: typePaymentEntity[]
      ]
      ) {
        if (args.length === 0) {
          this.name = '';
          this.detail = '';
          this.typeCurrencyId = '';
          this.typePaymentId =  '';
          this.implementationCost = 0;
          this.instalationCost = 0;
          this.regularPrice = 0;
          this.advancePrice = 0;
          this.listTypeCurrencies = []
          this.listTypePayments = []
        } 
        else {
          [
            this.name,
            this.detail,
            this.typeCurrencyId,
            this.typePaymentId,
            this.implementationCost,
            this.instalationCost,
            this.regularPrice,
            this.advancePrice,
            this.listTypeCurrencies,
            this.listTypePayments
          ] = args;
        }
    }

}