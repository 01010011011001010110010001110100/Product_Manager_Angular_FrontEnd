import { IService } from "../interface/IService";
import { typeCurrencyEntity } from "../entities/typeCurrencyEntity";
import { Observable, catchError, map, of } from "rxjs";
import { ApiService } from "./ApiService";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class typeCurrencyService implements IService<typeCurrencyEntity,typeCurrencyEntity, typeCurrencyEntity,typeCurrencyEntity, typeCurrencyEntity> {

    constructor(public apiService: ApiService) {}
    
    getAll(): Observable<typeCurrencyEntity[]> {
        return this.apiService.getData('type-currencies').pipe(
            map((response: any) => {
                const listTypeCurrency: typeCurrencyEntity[] = [];
                
                if (response && response.data) {
                    const productsResponse: any[] = response.data;
                    
                    productsResponse.forEach((product) => {
                        listTypeCurrency.push(new typeCurrencyEntity(
                            product.documentId,
                            product.name,
                            product.ISO2
                        ));
                    });
                }
    
                return listTypeCurrency;
            }),
            catchError((error) => {
                console.error(error);
                return of([]); // Devuelve un array vacío en caso de error
            })
        );
    }
        
    get(documentId: string): Observable<typeCurrencyEntity | null> {
        throw new Error("Method not implemented.");
    }
    add(saveModel: typeCurrencyEntity): Observable<any> {
        throw new Error("Method not implemented.");
    }
    update(editModel: typeCurrencyEntity): Observable<any> {
        throw new Error("Method not implemented.");
    }
    delete(deleteModel: typeCurrencyEntity): Observable<any> {
        throw new Error("Method not implemented.");
    }
    
}