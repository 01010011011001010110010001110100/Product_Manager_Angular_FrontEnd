import { Injectable } from "@angular/core";
import { genericService } from "./common/genericService";
import { typeCurrencyEntity } from "../entities/typeCurrencyEntity";
import { ApiRequest } from "../DTOS/request/ApiRequest";
import { ITypeCurrencyService } from "../interfaces/services/ITypeCurrencyService";
import { typeCurrencyRepository } from "../repositories/typeCurrencyRepository";

@Injectable({
    providedIn: 'root'
})
export class typeCurrencyService extends genericService<typeCurrencyEntity, typeCurrencyEntity, typeCurrencyEntity, typeCurrencyEntity, ApiRequest> implements ITypeCurrencyService{ 

    constructor(repository: typeCurrencyRepository) {
        super(repository, ApiRequest);
    }
}