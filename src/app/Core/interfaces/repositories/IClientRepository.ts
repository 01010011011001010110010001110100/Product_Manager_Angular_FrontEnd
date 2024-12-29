import { ApiRequest } from "../../DTOS/request/ApiRequest";
import { clientEntity } from "../../entities/clientEntity";
import { IGenericRepository } from "./common/IGenericRepository";


export interface IClientRepository extends IGenericRepository<clientEntity, ApiRequest> {}