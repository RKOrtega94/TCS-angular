import { Component, input } from '@angular/core';
import { TableConfig } from './table.interface';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  dataSource = input.required<TableConfig<any>>();
}
