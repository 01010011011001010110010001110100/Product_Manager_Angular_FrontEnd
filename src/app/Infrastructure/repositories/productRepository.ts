import { ApiRequest } from "../../Core/DTOS/request/ApiRequest";
import { genericRepository } from "./common/genericRepository";
import { IProductRepository } from "../../Core/interfaces/repositories/IProductRepository";
import { Injectable } from "@angular/core";
import { productEntity } from "../../Core/entities/productEntity";
import { EStrapiEndPoints } from "../../Core/enums/repositories/EStrapiEndPoints";
import { configService } from "../../Core/services/configService";
import { EApiContentKey } from "../../Core/enums/repositories/EApiContentKey";


@Injectable({
  providedIn: 'root'
})
export class productRepository extends genericRepository<productEntity, ApiRequest> implements IProductRepository {

    constructor(configurationService: configService) 
    {
        super(
          configurationService.getConfigs().apiBaseUrl,
          EStrapiEndPoints.PRODUCTS,
          EApiContentKey.STRAPI
        );
    }
}