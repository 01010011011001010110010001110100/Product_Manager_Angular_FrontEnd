import { IService } from "../interface/IService";
import { typePaymentEntity } from "../entities/typePaymentEntity";
import { Observable, catchError, map, of } from "rxjs";
import { ApiService } from "./ApiService";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class typePaymentService implements IService<typePaymentEntity, typePaymentEntity, typePaymentEntity, typePaymentEntity> {

    constructor(private apiService: ApiService) {}

    
    getAll(): Observable<typePaymentEntity[]> {
        return this.apiService.getData('type-payments').pipe(
            map((response: any) => {
                const listTypePayment: typePaymentEntity[] = [];
                
                if (response && response.data) {
                    const productsResponse: any[] = response.data;
                    
                    productsResponse.forEach((product) => {
                        listTypePayment.push(new typePaymentEntity(
                            product.documentId,
                            product.name
                        ));
                    });
                }
    
                return listTypePayment;
            }),
            catchError((error) => {
                console.error(error);
                return of([]); // Devuelve un array vacío en caso de error
            })
        );
    }
    

    get(documentId: string): Observable<typePaymentEntity | null> {
        throw new Error("Method not implemented.");
    }
    add(saveModel: typePaymentEntity): Observable<any> {
        throw new Error("Method not implemented.");
    }
    update(editModel: typePaymentEntity): Observable<any> {
        throw new Error("Method not implemented.");
    }
    delete(documentId: string): Observable<any> {
        throw new Error("Method not implemented.");
    }

}