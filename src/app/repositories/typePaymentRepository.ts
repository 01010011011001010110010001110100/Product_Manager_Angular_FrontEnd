import { HttpClient } from "@angular/common/http";
import { ApiRequest } from "../DTOS/request/ApiRequest";
import { typePaymentEntity } from "../entities/typePaymentEntity";
import { ITypePaymentRepository } from "../interfaces/repositories/ITypePaymentRepository";
import { genericRepository } from "./common/genericRepository";
import { environment } from "../environments/environment";
import { Injectable } from "@angular/core";
import { STRAPPI_END_POINTS } from "../enums/STRAPPI_END_POINTS";


@Injectable({
  providedIn: 'root'
})
export class typePaymentRepository extends genericRepository<typePaymentEntity, ApiRequest, any> implements ITypePaymentRepository {

    constructor(http: HttpClient) 
    {
        const baseUrl: string = environment.apiBaseUrl;
        const endpoint: string = STRAPPI_END_POINTS.TYPE_PAYMENTS;
        super(http, baseUrl, endpoint, "data");
    }
}