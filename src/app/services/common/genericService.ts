
import { map, Observable } from "rxjs";
import { IGenericService } from "../../interfaces/services/IGenericService";
import { IGenericRepository } from "../../interfaces/repositories/IGenericRepository";


export class genericService<entity, createRequest, editRequest, simulateDeleteRequest, requestStruct> implements IGenericService<entity, createRequest, editRequest, simulateDeleteRequest>{

    // Variables
    private repository: IGenericRepository<entity, requestStruct>;

    // Structural variables
    private requestStructConstructor: new (content: any) => requestStruct;


    constructor(
        repository: IGenericRepository<entity, requestStruct>,
        requestStructConstructor: new (content: any) => requestStruct
    ) {
        this.repository = repository;
        this.requestStructConstructor = requestStructConstructor;
    };


    // Get the instance
    get(documentId: string): Observable<entity | undefined> {
        return this.repository.getData(documentId).pipe(
            map((response: entity | undefined) => response)
        );
    }


    // Add the instance 
    add(createRequest: createRequest): Observable<entity> {
        return this.repository.postData(this.createRequestStruct(createRequest)).pipe(
            map((response: entity) => response)
        );
    }


    // Update the instance
    update(editRequest: editRequest, documentId: string): Observable<entity> {
        return this.repository.updateData(this.createRequestStruct(editRequest), documentId).pipe(
            map((response: entity) => response)
        );
    }

    // Delete the instance
    delete(documentId: string): Observable<any> {
        return this.repository.deleteData(documentId).pipe(
            map((response: entity) => response)
        );
    }

    // Delete the instance (SIMULTATED) (IT JUST UPDATE THE ACTIVE STATE AND OTHER STUFF)
    simulateDelete(simulateDeleteRequest: simulateDeleteRequest, documentId: string): Observable<entity> {
        return this.repository.updateData(this.createRequestStruct(simulateDeleteRequest),documentId).pipe(
            map((response: entity) => response)
        );
    }


    // Get all the instances
    getAll(): Observable<entity[]> {
        return this.repository.getAllData().pipe(
            map((response: entity[]) => response)
        );
    }


    // Create an instance of requestStruct
    private createRequestStruct<T>(req: T): requestStruct {
        return new this.requestStructConstructor(req);
    }
}