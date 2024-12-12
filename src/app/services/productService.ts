import { Injectable, inject } from "@angular/core";
import { IService } from "../interface/IService";
import { productEntity } from "../entities/productEntity";
import { ApiService } from "./ApiService";
import { productModel } from "../DTOS/models/product/productModel";
import { saveProductModel } from "../DTOS/models/product/saveProductModel";
import { Observable, catchError, map, of } from "rxjs";
import { createProductRequest } from "../DTOS/request/createProductRequest";
import { IRequestApi } from "../DTOS/request/ApiRequest";
import { editProductModel } from "../DTOS/models/product/editProductModel";
import { editProductRequest } from "../DTOS/request/editProductRequest";


@Injectable({
    providedIn: 'root'
})
export class productService implements IService<productModel,saveProductModel,editProductModel,productEntity>{

    constructor(public apiService: ApiService) {}

    getAll(): Observable<productModel[]> {
        return this.apiService.getData('products').pipe(
            map((response: any) => {
              return response.data.map((product: any) => new productModel(
                    product.documentId, 
                    product.name, 
                    product.detail
                )
              );
            })
        );
    }

    get(documentId: string): Observable<productEntity | null> {
        return this.apiService.getData(`products/${documentId}?populate[typeCurrencyID][fields]=documentId&populate[typePaymentID][fields]=documentId`).pipe(
            map((response: any) => {
                if (response && response.data) {
                    const productsResponse = response.data;
                    return new productEntity(
                        productsResponse.Id,
                        productsResponse.name,
                        productsResponse.detail,
                        productsResponse.typeCurrencyID.documentId,
                        productsResponse.typePaymentID.documentId,
                        productsResponse.implementationCost,
                        productsResponse.instalationCost,
                        productsResponse.regularPrice,
                        productsResponse.advancePrice,
                        productsResponse.isActive,
                        productsResponse.isDeleted,
                        productsResponse.createdOn,
                        productsResponse.updatedOn,
                        productsResponse.deletedOn,
                        productsResponse.createdByUserId
                    );
                } else {
                    return null;
                }
            }),
            catchError((error) => {
                console.error(error);
                return of(null); // En caso de error, devolvemos null
            })
        );
    }
    

    getEditModel(documentId: string): Observable<editProductModel | null> {
        return this.get(documentId).pipe(
            map((entity: productEntity | null) => {
                if (entity) {
                    return new editProductModel(
                        entity.documentId,
                        entity.name,
                        entity.detail,
                        entity.typeCurrencyId,
                        entity.typePaymentId,
                        entity.implementationCost,
                        entity.instalationCost,
                        entity.regularPrice,
                        entity.advancePrice,
                        entity.isActive,
                        null,
                        null
                    );
                } else {
                    return null;
                }
            })
        );
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


    update(editModel: editProductModel): Observable<any> {
        let request: IRequestApi = new IRequestApi(
            new editProductRequest(
                editModel.name,
                editModel.detail,
                editModel.typeCurrencyId,
                editModel.typePaymentId,
                editModel.implementationCost,
                editModel.instalationCost,
                editModel.regularPrice,
                editModel.advancePrice,
                editModel.isActive
            )
        );

        return this.apiService.updateData('products', request, editModel.documentId);
    }

    delete(documentId: string): Observable<any> {
        return this.apiService.deleteData('products',documentId);
    }
}