import { EDynamicTableRowToUse } from "../../../enums/components/EDynamicTableRowToUse";

export interface dynamicTableConfig {
    emptyValue?: string;
    rowsToUse?: EDynamicTableRowToUse;
    useControls?: boolean;
}