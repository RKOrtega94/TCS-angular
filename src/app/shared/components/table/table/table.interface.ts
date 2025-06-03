export type TableColumnType = 'text' | 'number' | 'date' | 'boolean' | 'custom';

export interface TableColumn {
  header: string;
  field: string;
  dataType: TableColumnType;
}

export interface TableConfig<T = any> {
  columns: TableColumn[];
  dataSource: T[];
  //   perPage?: number;
  //   currentPage?: number;
}
