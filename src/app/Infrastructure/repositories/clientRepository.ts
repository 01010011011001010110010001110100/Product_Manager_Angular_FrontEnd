import { Injectable } from "@angular/core";
import { EStrapiEndPoints } from "../../Core/enums/repositories/EStrapiEndPoints";
import { genericRepository } from "./common/genericRepository";
import { clientEntity } from "../../Core/entities/clientEntity";
import { ApiRequest } from "../../Core/DTOS/request/ApiRequest";
import { IClientRepository } from "../../Core/interfaces/repositories/IClientRepository";
import { configService } from "../../Core/services/configService";
import { EApiContentKey } from "../../Core/enums/repositories/EApiContentKey";


@Injectable({
  providedIn: 'root'
})
export class clientRepository extends genericRepository<clientEntity, ApiRequest> implements IClientRepository {

    constructor(configurationService: configService) 
    {
        super(
          configurationService.getConfigs().apiBaseUrl,
          EStrapiEndPoints.CLIENTS,
          EApiContentKey.STRAPI
        );
    }
}