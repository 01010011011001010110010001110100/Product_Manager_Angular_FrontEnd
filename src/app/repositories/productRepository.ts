import { HttpClient } from "@angular/common/http";
import { ApiRequest } from "../DTOS/request/ApiRequest";
import { genericRepository } from "./common/genericRepository";
import { IProductRepository } from "../interfaces/repositories/IProductRepository";
import { environment } from "../environments/environment";
import { Injectable } from "@angular/core";
import { productEntity } from "../entities/productEntity";
import { STRAPPI_END_POINTS } from "../enums/STRAPPI_END_POINTS";


@Injectable({
  providedIn: 'root'
})
export class productRepository extends genericRepository<productEntity, ApiRequest, any> implements IProductRepository {

    constructor(http: HttpClient) 
    {
        const baseUrl: string = environment.apiBaseUrl;
        const endpoint: string = STRAPPI_END_POINTS.PRODUCTS;
        super(http, baseUrl, endpoint, "data");
    }
}