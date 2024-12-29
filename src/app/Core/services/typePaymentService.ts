
import { Injectable } from "@angular/core";
import { typePaymentEntity } from "../entities/typePaymentEntity";
import { typePaymentRepository } from "../../Infrastructure/repositories/typePaymentRepository";
import { genericService } from "./common/genericService";
import { ApiRequest } from "../DTOS/request/ApiRequest";
import { ITypePaymentService } from "../interfaces/services/ITypePaymentService";

@Injectable({
    providedIn: 'root'
})
export class typePaymentService  extends genericService<typePaymentEntity, typePaymentEntity, typePaymentEntity, typePaymentEntity, ApiRequest> implements ITypePaymentService{ 

    constructor(repository: typePaymentRepository) {
        super(repository, ApiRequest);
    }
    
}