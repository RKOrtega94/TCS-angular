import { TemplateRef } from '@angular/core';

export type TableColumnType = 'text' | 'number' | 'date' | 'boolean' | 'custom';

export interface TableColumn<T = any> {
  field: string;
  dataType: TableColumnType;
  sortable?: boolean;
  displayFn?: (
    row: T,
    column: TableColumn<T>
  ) => string | number | boolean | Date | any;
  cellTemplate?: TemplateRef<any>;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
}

export interface TableConfig<T = any> {
  columns: TableColumn<T>[];
}
