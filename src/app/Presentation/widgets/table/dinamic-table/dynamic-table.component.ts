import { Component, EventEmitter, Input, Output } from '@angular/core';
import { dynamicTableConfig } from '../../../../Core/DTOS/configs/components/dynamicTableConfig';
import { EDynamicTableReadingMode } from '../../../../Core/enums/components/dynamicTable/EDynamicTableReadingMode';
import { EDynamicTableDataType } from '../../../../Core/enums/components/dynamicTable/EDynamicTableDataType';
import { objectHelper } from '../../../../Core/helpers/others/objectHelper';
import { RenderContainerComponent } from '../render-container/render-container.component';
import { EDynamicTableControlsType } from '../../../../Core/enums/components/dynamicTable/EDynamicTableControlsType';


@Component({
  selector: 'dynamic-table',
  imports: [RenderContainerComponent],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.css'
})
export class DynamicTableComponent<T> {
  // Vars
  @Input() headers: string[];
  @Input() dataSource: any[];
  @Input() specificTypes: {type: EDynamicTableDataType, content: any}[];

  // Table configs
  private _config: dynamicTableConfig;  

  // enums
  public readingMode: typeof EDynamicTableReadingMode; 
  public dataType: typeof EDynamicTableDataType;
  public controlType: typeof EDynamicTableControlsType;
  
  // Controls Events
  @Output() editRow: EventEmitter<T>;
  @Output() detailRow: EventEmitter<T>;
  @Output() deleteRow: EventEmitter<T>;

  constructor() {
    // Initialize vars
    this.headers = [];
    this.dataSource = [];
    this.specificTypes = [];
    this.readingMode = EDynamicTableReadingMode;
    this.dataType = EDynamicTableDataType;
    this.controlType = EDynamicTableControlsType;

    // Controls Events
    this.editRow = new EventEmitter();
    this.detailRow = new EventEmitter();
    this.deleteRow = new EventEmitter();

    // Set Config
    this._config = {
      emptyValueMessage: 'N/A',
      dataSourceEmptyMessage: 'There is no data to load',
      readingMode: EDynamicTableReadingMode.ANY
    };
  }
  
  // Checking functions
  public isContentKeyOfData(data: any, content: any): boolean {
    return typeof content === "string" && Object.keys(data).includes(content);
  }

  public isArray(content: any): boolean {
    return content instanceof Array;
  }

  public isControlMember(content: any): boolean {
    return Object.values(EDynamicTableControlsType).includes(content);
  }

  public parseContentToNumber(content: any): number {
    const num = Number(content);
    return isNaN(num) ? 0 : num;
  }


  // Emiters events control
  public emitEditRow(data: T): void {
    this.editRow.emit(data);
  }
  public emitDetailRow(data: T): void {
    this.detailRow.emit(data);
  }
  public emitDeleteRow(data: T): void {
    this.deleteRow.emit(data);
  }


  // Getters and setters
  @Input()
  public set config(v : dynamicTableConfig) {
    this._config = objectHelper.mapMatchingProperties(this._config, v);
  }
  public get config() {
    return this._config;
  }

}
