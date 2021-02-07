import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<DataTableItem>;
  @Input('itemToShow') itemToShow: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['city', 'weather','icon','lon','lat','temp','tempMin','tempMax'];
}

export interface DataTableItem {
  city: string;
  weather: string;
  icon: string;
  lon: string;
  lat: string;
  temp: string;
  tempMin: string;
  tempMax: string;
}
