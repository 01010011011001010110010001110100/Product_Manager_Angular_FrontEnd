import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { EROUTES } from "../../enums/EROUTES";

@Injectable({
    providedIn: 'root'
  })
export class routerDecorated extends Router{
    // Var Extends
    public routes: typeof EROUTES;

    constructor(router: Router) {
        // Initialize vars
        super();
        this.routes = EROUTES;
    }
}