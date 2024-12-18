import { Injectable } from "@angular/core";
import { STRAPPI_END_POINTS } from "../enums/STRAPPI_END_POINTS";
import { genericRepository } from "./common/genericRepository";
import { clientEntity } from "../entities/clientEntity";
import { ApiRequest } from "../DTOS/request/ApiRequest";
import { HttpClient } from "@angular/common/http";
import { IClientRepository } from "../interfaces/repositories/IClientRepository";
import { configService } from "../services/configService";


@Injectable({
  providedIn: 'root'
})
export class clientRepository extends genericRepository<clientEntity, ApiRequest, any> implements IClientRepository {

    constructor(http: HttpClient, configurationService: configService) 
    {
        super(
          http, 
          configurationService.getConfigs().apiBaseUrl,
          STRAPPI_END_POINTS.CLIENTS,
          "data"
        );
    }
}