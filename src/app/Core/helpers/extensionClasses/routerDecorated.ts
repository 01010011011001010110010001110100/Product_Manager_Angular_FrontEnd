import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ERoutes } from "../../enums/ERoutes";

@Injectable({
    providedIn: 'root'
})
export class routerDecorated extends Router{
    // Var Extends
    public routes: typeof ERoutes;

    constructor(router: Router) {
        // Initialize vars
        super();
        this.routes = ERoutes;
    }
}