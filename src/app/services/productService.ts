import { Injectable, inject } from "@angular/core";
import { IService } from "../interface/IService";
import { productEntity } from "../entities/productEntity";
import { ApiService } from "./ApiService";
import { productModel } from "../DTOS/models/product/productModel";
import { saveProductModel } from "../DTOS/models/product/saveProductModel";
import { Observable, catchError, throwError } from "rxjs";
import { createProductRequest } from "../DTOS/request/createProductRequest";
import { IRequestApi } from "../DTOS/request/ApiRequest";


@Injectable({
    providedIn: 'root'
})
export class productService implements IService<productModel,saveProductModel,productEntity>{

    constructor(public apiService: ApiService) {}

    getAll(): productModel[] {
        const listProductModel: productModel[] = [];

        this.apiService.getData('products').subscribe((response: any) => {
            const productsResponse: any[] = response.data;
            
            productsResponse.forEach((product) => {
                listProductModel.push(new productModel(
                    product.ID,
                    product.name,
                    product.detail
                ));
            })
        });

        return listProductModel;
    }

    get(): productEntity {
        throw new Error("Method not implemented.");
    }
    
    add(saveModel: saveProductModel): Observable<any> {

        let request: IRequestApi = new IRequestApi(
            new createProductRequest(
                saveModel.name,
                saveModel.detail,
                saveModel.typeCurrencyId,
                saveModel.typePaymentId,
                saveModel.implementationCost,
                saveModel.instalationCost,
                saveModel.regularPrice,
                saveModel.advancePrice
            )
        );

        return this.apiService.postData('products', request);
    }

    update(entity: saveProductModel): Observable<any> {
        throw new Error("Method not implemented.");
    }

    delete(ID: number): Observable<any> {
        throw new Error("Method not implemented.");
    }
}