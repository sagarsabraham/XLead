import { AfterViewInit, Component, Input, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TableOutlineComponent } from '../table-outline/table-outline.component';

@Component({
  selector: 'app-contacts-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatIconModule,
    TableOutlineComponent
  ],
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent implements OnInit, AfterViewInit {
  @Input() data: any[] = [];
  @Input() headers: { key: string; label: string }[] = [];
  @Input('class') classNames = '';

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  sortDirection: { [key: string]: 'asc' | 'desc' } = {};
  sortedColumn: string | null = null;
  allSelected: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cdr: ChangeDetectorRef) {
    this.dataSource = new MatTableDataSource<any>([]);
  }

  ngOnInit() {
    this.displayedColumns = ['select', ...this.headers.map(header => header.key)];
    this.dataSource.data = this.data.map(item => ({ ...item, selected: false }));
  }

  ngAfterViewInit() {
    if (this.dataSource.data.length > 0) {
      this.dataSource.paginator = this.paginator;
      this.paginator.length = this.dataSource.data.length;
      this.paginator.pageSize = 5;
      this.paginator.firstPage();
      this.cdr.detectChanges();
    }
  }

  onPageChange(event: PageEvent) {
    this.cdr.detectChanges();
  }

  onCheckboxChange(row: any, checked: boolean) {
    row.selected = checked;
    this.allSelected = this.dataSource.data.every(item => item.selected);
    this.cdr.detectChanges();
  }

  onSelectAll(checked: boolean) {
    this.allSelected = checked;
    this.dataSource.data.forEach(item => (item.selected = checked));
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

    this.cdr.detectChanges();
  }
}