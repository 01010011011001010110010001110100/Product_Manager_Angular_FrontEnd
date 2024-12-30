import { Component, Input } from '@angular/core';
import { dynamicTableConfig } from '../../../../Core/DTOS/configs/components/dynamicTableConfig';
import { EDynamicTableRowToUse } from '../../../../Core/enums/components/EDynamicTableRowToUse';


@Component({
  selector: 'dinamic-table',
  imports: [],
  templateUrl: './dinamic-table.component.html',
  styleUrl: './dinamic-table.component.css'
})
export class DinamicTableComponent<T> {
  // Vars
  @Input() dataSource: T[];
  @Input() headers: string[];
  @Input() rows: any[][];
  
  // Table configs
  @Input() config: dynamicTableConfig;

  // enums
  public rowsToUse: typeof EDynamicTableRowToUse; 

  constructor() {
    // Initialize vars
    this.headers = [];
    this.rows = [[]];
    this.dataSource = [];
    this.rowsToUse = EDynamicTableRowToUse;

    // Set Config
    this.config = {
      emptyValue: '[n/a]',
      rowsToUse: EDynamicTableRowToUse.RAW,
      useControls: false
    };
  }


  // public getRowsToUse(): any[] {
  //   switch(this.config.rowsToUse) {
  //     case EDynamicTableRowToUse.RAW: return this.rows;
  //   }
  // }


  // Comparison for identify the passed value
  public isEmpty(value: any): boolean {
    return (
      typeof value === typeof null || 
      typeof value === typeof undefined || 
      (typeof value === typeof String && value === '')
    );
  }

  public isKeyOfData(content: any, index: number): boolean {
    return (
      this.rows.length != 0 &&
      typeof content === "string" && 
      Object.keys(this.rows[index]).includes(content)
    );
  }

  public isObject(value: any): boolean {
    return typeof value === typeof Object;
  }
}
