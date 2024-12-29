import { ApiRequest } from "../../Core/DTOS/request/ApiRequest";
import { typePaymentEntity } from "../../Core/entities/typePaymentEntity";
import { ITypePaymentRepository } from "../../Core/interfaces/repositories/ITypePaymentRepository";
import { genericRepository } from "./common/genericRepository";
import { Injectable } from "@angular/core";
import { EStrapiEndPoints } from "../../Core/enums/repositories/EStrapiEndPoints";
import { configService } from "../../Core/services/configService";
import { EApiContentKey } from "../../Core/enums/repositories/EApiContentKey";


@Injectable({
  providedIn: 'root'
})
export class typePaymentRepository extends genericRepository<typePaymentEntity, ApiRequest> implements ITypePaymentRepository {

    constructor(configurationService: configService) 
    {
        super(
          configurationService.getConfigs().apiBaseUrl,
          EStrapiEndPoints.TYPE_PAYMENTS,
          EApiContentKey.STRAPI
        );
    }
}