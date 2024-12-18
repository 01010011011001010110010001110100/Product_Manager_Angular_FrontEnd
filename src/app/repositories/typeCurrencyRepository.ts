import { HttpClient } from "@angular/common/http";
import { ApiRequest } from "../DTOS/request/ApiRequest";
import { typeCurrencyEntity } from "../entities/typeCurrencyEntity";
import { ITypeCurrencyRepository } from "../interfaces/repositories/ITypeCurrencyRepository";
import { genericRepository } from "./common/genericRepository";
import { Injectable } from "@angular/core";
import { STRAPPI_END_POINTS } from "../enums/STRAPPI_END_POINTS";
import { configService } from "../services/configService";


@Injectable({
  providedIn: 'root'
})
export class typeCurrencyRepository extends genericRepository<typeCurrencyEntity, ApiRequest, any> implements ITypeCurrencyRepository {

    constructor(http: HttpClient, configurationService: configService) 
    {
        super(
          http, 
          configurationService.getConfigs().apiBaseUrl,
          STRAPPI_END_POINTS.TYPE_CURRENCIES,
          "data"
        );
    }
}