import { HttpClient } from "@angular/common/http";
import { ApiRequest } from "../DTOS/request/ApiRequest";
import { typeCurrencyEntity } from "../entities/typeCurrencyEntity";
import { ITypeCurrencyRepository } from "../interfaces/repositories/ITypeCurrencyRepository";
import { genericRepository } from "./common/genericRepository";
import { environment } from "../environments/environment";
import { Injectable } from "@angular/core";
import { STRAPPI_END_POINTS } from "../enums/STRAPPI_END_POINTS";


@Injectable({
  providedIn: 'root'
})
export class typeCurrencyRepository extends genericRepository<typeCurrencyEntity, ApiRequest, any> implements ITypeCurrencyRepository {

    constructor(http: HttpClient) 
    {
        const baseUrl: string = environment.apiBaseUrl;
        const endpoint: string = STRAPPI_END_POINTS.TYPE_CURRENCIES;
        super(http, baseUrl, endpoint, "data");
    }
}