import { Component } from '@angular/core';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { Observable, of } from 'rxjs';
import {
  DataResult,
  orderBy,
  process,
  SortDescriptor,
} from '@progress/kendo-data-query';
import { products } from '../../data.products';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  // providers: [ProductService],
})
export class TableComponent {
  constructor() {
    this.loadGridItems();
  }

  public gridItems: Observable<GridDataResult> | undefined;
  public pageSize: number = 10;
  public skip: number = 0;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number | null = null;

  private loadGridItems(): void {
    let data;
    if (this.filterTerm) {
      data = process(orderBy(products, this.sortDescriptor), {
        filter: {
          logic: 'and',
          filters: [
            {
              field: 'CategoryID',
              operator: 'eq',
              value: this.filterTerm,
            },
          ],
        },
      }).data;
    } else {
      data = orderBy(products, this.sortDescriptor);
    }
    this.gridItems = of({
      data: data.slice(this.skip, this.skip + this.pageSize),
      total: data.length,
    });
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadGridItems();
  }

  public handleSortChange(descriptor: SortDescriptor[]): void {
    this.sortDescriptor = descriptor;
    this.loadGridItems();
  }
}
