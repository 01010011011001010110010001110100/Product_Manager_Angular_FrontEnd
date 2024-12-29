import { Observable } from "rxjs";
import { createClientRequest } from "../../DTOS/request/client/createClientRequest";
import { editClientRequest } from "../../DTOS/request/client/editClientRequest";
import { simulateDeleteClientRequest } from "../../DTOS/request/client/simulateDeleteClientequest";
import { clientEntity } from "../../entities/clientEntity";
import { IGenericService } from "./common/IGenericService";
import { editClientModel } from "../../DTOS/models/clients/editClientModel";
import { clientModel } from "../../DTOS/models/clients/clientModel";

export interface IClientService extends IGenericService<clientEntity, createClientRequest, editClientRequest, simulateDeleteClientRequest> {
    getEditModel(documentId: string): Observable<editClientModel | undefined>;
    getAllModel(): Observable<clientModel[]>;
    getAllModelFiltered(filters: { property: string, value: any }[]): Observable<clientModel[]>;
}