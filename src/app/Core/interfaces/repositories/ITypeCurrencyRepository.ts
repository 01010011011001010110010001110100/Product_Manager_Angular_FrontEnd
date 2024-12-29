import { ApiRequest } from "../../DTOS/request/ApiRequest";
import { typeCurrencyEntity } from "../../entities/typeCurrencyEntity";
import { IGenericRepository } from "./common/IGenericRepository";

export interface ITypeCurrencyRepository extends IGenericRepository<typeCurrencyEntity, ApiRequest> {}