import { EDynamicTableReadingMode } from "../../../enums/components/dynamicTable/EDynamicTableReadingMode";

export interface dynamicTableConfig {
    emptyValueMessage?: string;
    dataSourceEmptyMessage?: string;
    readingMode?: EDynamicTableReadingMode;
}