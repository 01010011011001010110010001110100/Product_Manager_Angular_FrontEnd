import { HttpClient } from "@angular/common/http";
import { ApiRequest } from "../DTOS/request/ApiRequest";
import { genericRepository } from "./common/genericRepository";
import { IProductRepository } from "../interfaces/repositories/IProductRepository";
import { Injectable } from "@angular/core";
import { productEntity } from "../entities/productEntity";
import { STRAPPI_END_POINTS } from "../enums/STRAPPI_END_POINTS";
import { configService } from "../services/configService";


@Injectable({
  providedIn: 'root'
})
export class productRepository extends genericRepository<productEntity, ApiRequest, any> implements IProductRepository {

    constructor(http: HttpClient, configurationService: configService) 
    {
        super(
          http, 
          configurationService.getConfigs().apiBaseUrl,
          STRAPPI_END_POINTS.PRODUCTS,
          "data"
        );
    }
}