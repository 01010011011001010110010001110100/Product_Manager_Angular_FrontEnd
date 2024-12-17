import { ApiRequest } from "../../DTOS/request/ApiRequest";
import { productEntity } from "../../entities/productEntity";
import { IGenericRepository } from "./IGenericRepository";


export interface IProductRepository extends IGenericRepository<productEntity, ApiRequest> {}