import { Injectable } from "@angular/core";
import { EDynamicTableDataType } from "../enums/components/dynamicTable/EDynamicTableDataType";
import { EDynamicTableReadingMode } from "../enums/components/dynamicTable/EDynamicTableReadingMode";
import { EDynamicTableControlsType } from "../enums/components/dynamicTable/EDynamicTableControlsType";

@Injectable({
    providedIn: 'root'
})
export class enumProviderService {
    // Enums To Provide
    public dynamicTableDataType: typeof EDynamicTableDataType;
    public dynamicTableReadingMode: typeof EDynamicTableReadingMode;
    public dynamicTableControlsType: typeof EDynamicTableControlsType;

    constructor() {
        // Initialize vars
        this.dynamicTableDataType = EDynamicTableDataType;
        this.dynamicTableReadingMode = EDynamicTableReadingMode;
        this.dynamicTableControlsType = EDynamicTableControlsType;
    }
}