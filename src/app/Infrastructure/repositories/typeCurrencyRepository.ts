import { ApiRequest } from "../../Core/DTOS/request/ApiRequest";
import { typeCurrencyEntity } from "../../Core/entities/typeCurrencyEntity";
import { ITypeCurrencyRepository } from "../../Core/interfaces/repositories/ITypeCurrencyRepository";
import { genericRepository } from "./common/genericRepository";
import { Injectable } from "@angular/core";
import { EStrapiEndPoints } from "../../Core/enums/repositories/EStrapiEndPoints";
import { configService } from "../../Core/services/configService";
import { EApiContentKey } from "../../Core/enums/repositories/EApiContentKey";


@Injectable({
  providedIn: 'root'
})
export class typeCurrencyRepository extends genericRepository<typeCurrencyEntity, ApiRequest> implements ITypeCurrencyRepository {

    constructor(configurationService: configService) 
    {
        super(
          configurationService.getConfigs().apiBaseUrl,
          EStrapiEndPoints.TYPE_CURRENCIES,
          EApiContentKey.STRAPI
        );
    }
}