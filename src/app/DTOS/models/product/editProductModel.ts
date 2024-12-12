import { typeCurrencyEntity } from "../../../entities/typeCurrencyEntity";
import { typePaymentEntity } from "../../../entities/typePaymentEntity";

export class editProductModel {
    public documentId: string;
    public name: string;
    public detail: string;
    public typeCurrencyId: string;
    public typePaymentId: string;
    public implementationCost: number;
    public instalationCost: number;
    public regularPrice: number;
    public advancePrice: number;
    public isActive: boolean;

    public listTypeCurrencies: typeCurrencyEntity[] | null;
    public listTypePayments: typePaymentEntity[] | null;

    constructor(...args : 
        []  |
        [
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
          typeCurrencys: typeCurrencyEntity[] | null,
          typePayments: typePaymentEntity[] | null
        ]
        ) {
          if (args.length === 0) {
            this.documentId = '';
            this.name = '';
            this.detail = '';
            this.typeCurrencyId = '';
            this.typePaymentId =  '';
            this.implementationCost = 0;
            this.instalationCost = 0;
            this.regularPrice = 0;
            this.advancePrice = 0;
            this.isActive = false;
            this.listTypeCurrencies = []
            this.listTypePayments = []
          } 
          else {
            [
              this.documentId,
              this.name,
              this.detail,
              this.typeCurrencyId,
              this.typePaymentId,
              this.implementationCost,
              this.instalationCost,
              this.regularPrice,
              this.advancePrice,
              this.isActive,
              this.listTypeCurrencies,
              this.listTypePayments
            ] = args;
          }
      }
}