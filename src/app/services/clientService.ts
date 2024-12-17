import { map, Observable } from "rxjs";
import { ApiRequest } from "../DTOS/request/ApiRequest";
import { createClientRequest } from "../DTOS/request/client/createClientRequest";
import { editClientRequest } from "../DTOS/request/client/editClientRequest";
import { simulateDeleteClientRequest } from "../DTOS/request/client/simulateDeleteClientequest";
import { clientEntity } from "../entities/clientEntity";
import { IClientService } from "../interfaces/services/IClientService";
import { clientRepository } from "../repositories/clientRepository";
import { genericService } from "./common/genericService";
import { editClientModel } from "../DTOS/models/clients/editClientModel";
import { objectHelper } from "../helpers/objectHelper";
import { clientModel } from "../DTOS/models/clients/clientModel";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class clientService extends genericService<clientEntity, createClientRequest, editClientRequest, simulateDeleteClientRequest, ApiRequest> implements IClientService{ 

    constructor(repository: clientRepository) {
        super(repository, ApiRequest);
    }


        // Personal of servicess
        getEditModel(documentId: string): Observable<editClientModel | undefined> {
            return super.get(documentId).pipe(
                map((response: clientEntity | undefined) => {
                    if (response) {
                        return objectHelper.mapMatchingProperties(new editClientModel(), response);
                    } else {
                        return undefined;
                    }
                })
            );
        }
    
    
        // Get all entitys and convert to client  model
        getAllModel(): Observable<clientModel[]> {
            return super.getAll().pipe(
                map((clients: clientEntity[]) => clients.map(client => objectHelper.mapMatchingProperties(new clientModel(), client)))
            );
        }
    
    
        // Get all the client  filtered
        getAllModelFiltered(filters: { property: string, value: any }[]): Observable<clientModel[]> {
            return this.getAll().pipe(
                map(
                    (clients: Record<string, any>[]) => clients
                    .filter(client => 
                        filters.every(filter => client[filter.property] === filter.value)
                    )
                    .map(client => 
                        objectHelper.mapMatchingProperties(new clientModel(), client)
                    )
                )
            );
        }


    
    // Set some config before create the product
    override add(createRequest: createClientRequest): Observable<clientEntity> {
        // Defualt config
        createRequest.isActive = true;
        createRequest.isDeleted = false;
        createRequest.createdOn = new Date().toISOString();

        // Send to add
        return super.add(createRequest);
    }


    // Set some config before update the product
    override update(editRequest: editClientRequest, documentId: string): Observable<clientEntity> {
        // Defualt config
        editRequest.updatedOn = new Date().toISOString();

        // Send to update
        return super.update(editRequest, documentId);
    }

    
    // Set some config before sumlate the delete
    override simulateDelete(simulateDeleteRequest: simulateDeleteClientRequest,documentId: string): Observable<clientEntity> {
        // Defualt config
        simulateDeleteRequest.isActive = false;
        simulateDeleteRequest.isDeleted = true;
        simulateDeleteRequest.deletedOn = new Date().toISOString();

        // Go to simulate the delete updating it
        return super.simulateDelete(simulateDeleteRequest, documentId);
    }
}