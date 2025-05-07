import { AfterViewInit, Component, Input, ViewChild, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { TableOutlineComponent } from '../table-outline/table-outline.component';

@Component({
  selector: 'app-contacts-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    TableOutlineComponent
  ],
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent implements OnChanges, AfterViewInit {
  private _data: any[] = [];
  private _headers: { key: string; label: string }[] = [];

  @Input()
  set data(value: any[]) {
    this._data = value || [];
    this.updateDataSource();
    this.updatePaginator();
  }
  get data(): any[] {
    return this._data;
  }

  @Input()
  set headers(value: { key: string; label: string }[]) {
    this._headers = value || [];
    this.displayedColumns = ['select', ...this._headers.map(header => header.key)];
    console.log('Headers set:', this._headers);
    console.log('Displayed columns updated:', this.displayedColumns);
    this.updateDataSource();
    this.cdr.detectChanges();
  }
  get headers(): { key: string; label: string }[] {
    return this._headers;
  }

  @Input('class') classNames = '';

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  sortDirection: { [key: string]: 'asc' | 'desc' } = {};
  sortedColumn: string | null = null;
  allSelected: boolean = false;
  someSelected: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    // Changes are handled by the setters
  }

  ngAfterViewInit() {
    this.updatePaginator();
  }

  private updateDataSource() {
    this.dataSource = new MatTableDataSource(
      this._data.map(item => ({ ...item, selected: item.selected || false }))
    );
    console.log('ContactsTable displayedColumns:', this.displayedColumns);
    console.log('ContactsTable dataSource:', this.dataSource.data);
    this.updateSelectAllState();
    this.cdr.detectChanges();
  }

  private updatePaginator() {
    if (this.paginator && this.dataSource.data.length > 0) {
      this.dataSource.paginator = this.paginator;
      this.paginator.length = this.dataSource.data.length;
      this.paginator.pageSize = 10;
      this.paginator.firstPage();
      console.log('Paginator updated:', this.paginator);
      console.log('Paginator length:', this.paginator.length);
      console.log('Displayed data:', this.dataSource.filteredData);
      this.updateSelectAllState();
      this.cdr.detectChanges();
    }
  }

  onPageChange(event: PageEvent) {
    console.log('Page changed:', event);
    console.log('Displayed data:', this.dataSource.filteredData);
    this.updateSelectAllState();
    this.cdr.detectChanges();
  }

  onCheckboxChange(row: any, checked: boolean) {
    const index = this.dataSource.data.findIndex(item => item.id === row.id);
    if (index !== -1) {
      const updatedData = [...this.dataSource.data];
      updatedData[index] = { ...updatedData[index], selected: checked };
      this.dataSource.data = updatedData;
      this.updateSelectAllState();
      this.cdr.detectChanges();
    } else {
      console.warn('Row not found in data source:', row);
    }
  }

  onSelectAll(checked: boolean) {
    if (!this.paginator) return;

    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = Math.min(startIndex + this.paginator.pageSize, this.dataSource.data.length);
    const updatedData = [...this.dataSource.data];

    for (let i = startIndex; i < endIndex; i++) {
      if (i < updatedData.length) {
        updatedData[i] = { ...updatedData[i], selected: checked };
      }
    }

    this.dataSource.data = updatedData;
    this.allSelected = checked;
    if (checked) {
      this.someSelected = false;
    } else {
      const anySelected = this.dataSource.data.some((item, index) => 
        (index < startIndex || index >= endIndex) && item.selected
      );
      this.someSelected = anySelected;
    }

    this.cdr.detectChanges();
  }

  updateSelectAllState() {
    if (!this.paginator) {
      this.allSelected = false;
      this.someSelected = false;
      return;
    }

    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = Math.min(startIndex + this.paginator.pageSize, this.dataSource.data.length);
    const currentPageRows = this.dataSource.data.slice(startIndex, endIndex);

    if (currentPageRows.length === 0) {
      this.allSelected = false;
      this.someSelected = false;
      return;
    }

    const allCurrentPageSelected = currentPageRows.every(row => row.selected);
    const someCurrentPageSelected = currentPageRows.some(row => row.selected);

    this.allSelected = allCurrentPageSelected && currentPageRows.length > 0;
    this.someSelected = someCurrentPageSelected && !allCurrentPageSelected;

    this.cdr.detectChanges();
  }

  onSort(event: { key: string, direction: 'asc' | 'desc' }) {
    const { key, direction } = event;
    this.sortedColumn = key;
    this.sortDirection[key] = direction;

    this.dataSource.data = [...this.dataSource.data].sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];
      if (typeof valueA === 'string') {
        return direction === 'asc'
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else {
        return direction === 'asc' ? valueA - valueB : valueB - valueA;
      }
    });

    this.updateSelectAllState();
    this.cdr.detectChanges();
  }
}