import { Observable } from "rxjs";
import { editProductModel } from "../../DTOS/models/product/editProductModel";
import { productEntity } from "../../entities/productEntity";
import { IGenericService } from "./IGenericService";
import { createProductRequest } from "../../DTOS/request/product/createProductRequest";
import { editProductRequest } from "../../DTOS/request/product/editProductRequest";
import { simulateDeleteProductRequest } from "../../DTOS/request/product/simulateDeleteProductRequest";
import { productModel } from "../../DTOS/models/product/productModel";

export interface IProductService extends IGenericService<productEntity, createProductRequest, editProductRequest, simulateDeleteProductRequest> {
    getEditModel(documentId: string): Observable<editProductModel | undefined>;
    getAllModel(): Observable<productModel[]>;
    getAllModelFiltered(filters: { property: string, value: any }[]): Observable<productModel[]>;
}