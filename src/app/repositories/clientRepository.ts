import { Injectable } from "@angular/core";
import { STRAPPI_END_POINTS } from "../enums/STRAPPI_END_POINTS";
import { environment } from "../environments/environment";
import { genericRepository } from "./common/genericRepository";
import { clientEntity } from "../entities/clientEntity";
import { ApiRequest } from "../DTOS/request/ApiRequest";
import { HttpClient } from "@angular/common/http";
import { IClientRepository } from "../interfaces/repositories/IClientRepository";


@Injectable({
  providedIn: 'root'
})
export class clientRepository extends genericRepository<clientEntity, ApiRequest, any> implements IClientRepository {

    constructor(http: HttpClient) 
    {
        const baseUrl: string = environment.apiBaseUrl;
        const endpoint: string = STRAPPI_END_POINTS.CLIENTS;
        super(http, baseUrl, endpoint, "data");
    }
}