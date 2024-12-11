import { IService } from "../interface/IService";
import { typePaymentEntity } from "../entities/typePaymentEntity";
import { Observable } from "rxjs";
import { ApiService } from "./ApiService";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class typePaymentService implements IService<typePaymentEntity, typePaymentEntity, typePaymentEntity> {

    constructor(private apiService: ApiService) {}

    getAll(): typePaymentEntity[] {
        const listTypePayment: typePaymentEntity[] = [];

        this.apiService.getData('type-payments').subscribe((response: any) => {
            const productsResponse: any[] = response.data;
            
            productsResponse.forEach((product) => {
                listTypePayment.push(new typePaymentEntity(
                    product.ID,
                    product.name
                ));
            })
        });

        return listTypePayment;
    }

    get(ID: number): typePaymentEntity {
        throw new Error("Method not implemented.");
    }

    add(entity: typePaymentEntity): Observable<any> {
        throw new Error("Method not implemented.");
    }

    update(entity: typePaymentEntity): Observable<any> {
        throw new Error("Method not implemented.");
    }

    delete(ID: number): Observable<any> {
        throw new Error("Method not implemented.");
    }

}