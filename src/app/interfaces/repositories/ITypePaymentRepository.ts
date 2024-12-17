import { ApiRequest } from "../../DTOS/request/ApiRequest";
import { typePaymentEntity } from "../../entities/typePaymentEntity";
import { IGenericRepository } from "./IGenericRepository";


export interface ITypePaymentRepository extends IGenericRepository<typePaymentEntity, ApiRequest> {}