import { HttpClient } from "@angular/common/http";
import { ApiRequest } from "../DTOS/request/ApiRequest";
import { typePaymentEntity } from "../entities/typePaymentEntity";
import { ITypePaymentRepository } from "../interfaces/repositories/ITypePaymentRepository";
import { genericRepository } from "./common/genericRepository";
import { Injectable } from "@angular/core";
import { STRAPPI_END_POINTS } from "../enums/STRAPPI_END_POINTS";
import { configService } from "../services/configService";


@Injectable({
  providedIn: 'root'
})
export class typePaymentRepository extends genericRepository<typePaymentEntity, ApiRequest, any> implements ITypePaymentRepository {

    constructor(http: HttpClient, configurationService: configService) 
    {
        super(
          http, 
          configurationService.getConfigs().apiBaseUrl,
          STRAPPI_END_POINTS.TYPE_PAYMENTS,
          "data"
        );
    }
}