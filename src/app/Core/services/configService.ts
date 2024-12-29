import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { repositoyConfig } from "../DTOS/configs/repositoyConfig";
import { map, Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class configService {

    private http: HttpClient;
    private configurations: any;

    constructor(http: HttpClient) {
        this.configurations = {};
        this.http = http;
    }


    public loadConfigs(): Observable<unknown> {
        return this.http.get("/Configurations.json").pipe(
            map((response: Object) => this.configurations = response)
        );
    } 

    public getConfigs(): repositoyConfig {
        return this.configurations as repositoyConfig;
    }

}