import { IService } from "../interface/IService";
import { typeCurrencyEntity } from "../entities/typeCurrencyEntity";
import { Observable } from "rxjs";
import { ApiService } from "./ApiService";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class typeCurrencyService implements IService<typeCurrencyEntity, typeCurrencyEntity, typeCurrencyEntity> {

    constructor(public apiService: ApiService) {}

    getAll(): typeCurrencyEntity[] {
        const listTypeCurrency: typeCurrencyEntity[] = [];

        this.apiService.getData('type-currencies').subscribe((response: any) => {
            const productsResponse: any[] = response.data;
            
            productsResponse.forEach((product) => {
                listTypeCurrency.push(new typeCurrencyEntity(
                    product.ID,
                    product.name,
                    product.ISO2
                ));
            })
        });

        return listTypeCurrency;
    }

    get(ID: number): typeCurrencyEntity {
        throw new Error("Method not implemented.");
    }

    add(entity: typeCurrencyEntity): Observable<any> {
        throw new Error("Method not implemented.");
    }

    update(entity: typeCurrencyEntity): Observable<any> {
        throw new Error("Method not implemented.");
    }

    delete(ID: number): Observable<any> {
        throw new Error("Method not implemented.");
    }

    
}