import { Injectable } from "@angular/core";
import { productEntity } from "../entities/productEntity";
import { ApiRequest } from "../DTOS/request/ApiRequest";
import { editProductModel } from "../DTOS/models/product/editProductModel";
import { genericService } from "./common/genericService";
import { IProductService } from "../interfaces/services/IProductService";
import { productRepository } from "../repositories/productRepository";
import { map, Observable } from "rxjs";
import { objectHelper } from "../helpers/objectHelper";
import { createProductRequest } from "../DTOS/request/product/createProductRequest";
import { editProductRequest } from "../DTOS/request/product/editProductRequest";
import { simulateDeleteProductRequest } from "../DTOS/request/product/simulateDeleteProductRequest";
import { productModel } from "../DTOS/models/product/productModel";


@Injectable({
    providedIn: 'root'
})
export class productService extends genericService<productEntity, createProductRequest, editProductRequest, simulateDeleteProductRequest, ApiRequest> implements IProductService{ 

    constructor(repository: productRepository) {
        super(repository, ApiRequest);
    }


    // Personal of servicess
    getEditModel(documentId: string): Observable<editProductModel | undefined> {
        return super.get(documentId).pipe(
            map((response: productEntity | undefined) => {
                if (response) {
                    return objectHelper.mapMatchingProperties(new editProductModel(), response);
                } else {
                    return undefined;
                }
            })
        );
    }


    // Get all entitys and convert to product model
    getAllModel(): Observable<productModel[]> {
        return super.getAll().pipe(
            map((products: productEntity[]) => products.map(product => objectHelper.mapMatchingProperties(new productModel(), product)))
        );
    }


    // Get all the product filtered
    getAllModelFiltered(filters: { property: string, value: any }[]): Observable<productModel[]> {
        return this.getAll().pipe(
            map(
                (products: Record<string, any>[]) => products
                .filter(product => 
                    filters.every(filter => product[filter.property] === filter.value)
                )
                .map(product => 
                    objectHelper.mapMatchingProperties(new productModel(), product)
                )
            )
        );
    }


    // Set some config before create the product
    override add(createRequest: createProductRequest): Observable<productEntity> {
        // Defualt config
        createRequest.typeCurrency = createRequest.typeCurrencyId;
        createRequest.typePayment = createRequest.typePaymentId;
        createRequest.isActive = true;
        createRequest.isDeleted = false;
        createRequest.createdOn = new Date().toISOString();

        // Send to add
        return super.add(createRequest);
    }


    // Set some config before update the product
    override update(editRequest: editProductRequest, documentId: string): Observable<productEntity> {
        // Defualt config
        editRequest.typeCurrency = editRequest.typeCurrencyId;
        editRequest.typePayment = editRequest.typePaymentId;
        editRequest.updateOn = new Date().toISOString();

        // Send to update
        return super.update(editRequest, documentId);
    }

    
    // Set some config before sumlate the delete
    override simulateDelete(simulateDeleteRequest: simulateDeleteProductRequest,documentId: string): Observable<productEntity> {
        // Defualt config
        simulateDeleteRequest.isActive = false;
        simulateDeleteRequest.isDeleted = true;
        simulateDeleteRequest.deletedOn = new Date().toISOString();

        // Go to simulate the delete updating it
        return super.simulateDelete(simulateDeleteRequest, documentId);
    }
}