import { Injectable } from "@angular/core";
import { IService } from "../interface/IService";
import { productEntity } from "../entities/productEntity";
import { ApiService } from "./ApiService";
import { productModel } from "../DTOS/models/product/productModel";
import { saveProductModel } from "../DTOS/models/product/saveProductModel";
import { Observable, map } from "rxjs";
import { createProductRequest } from "../DTOS/request/product/createProductRequest";
import { IRequestApi } from "../DTOS/request/ApiRequest";
import { editProductModel } from "../DTOS/models/product/editProductModel";
import { editProductRequest } from "../DTOS/request/product/editProductRequest";
import { deleteProductModel } from "../DTOS/models/product/deleteProductModel";
import { simulateDeleteProductRequest } from "../DTOS/request/product/simulateDeleteProductRequest";
import { ApiResponse } from "../DTOS/response/ApiResponse";


@Injectable({
    providedIn: 'root'
})
export class productService implements IService<productModel,saveProductModel,editProductModel, deleteProductModel,productEntity>{

    constructor(public apiService: ApiService) {}

    getAll(): Observable<productModel[]> {
        return this.apiService.getData('products').pipe(
            map((response: ApiResponse) => {
              return response.data as productModel[];
            })
        );
    }

    get(documentId: string): Observable<productEntity | null> {
        return this.apiService.getData(`products/${documentId}`).pipe(
            map((response: ApiResponse) => {
                if (response.data) {
                    return response.data as productEntity;
                } else {
                    return null;
                }
            })
        );
    }
    

    // Personal of servicess
    getEditModel(documentId: string): Observable<editProductModel | null> {
        return this.apiService.getData(`products/${documentId}`).pipe(
            map((response: ApiResponse) => {
                if (response.data) {
                    return response.data as editProductModel;
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


    delete(deleteModel: deleteProductModel): Observable<any> {

        // Delete is no deleting just deactivate the register
        const request: IRequestApi = new IRequestApi(new simulateDeleteProductRequest());

        return this.apiService.updateData('products',request,deleteModel.documentId);
    }
}