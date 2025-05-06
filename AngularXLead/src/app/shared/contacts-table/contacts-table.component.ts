import { AfterViewInit, Component, Input, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TableCheckboxComponent } from '../checkbox/checkbox.component';
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
    TableCheckboxComponent,
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

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cdr: ChangeDetectorRef) {
    this.dataSource = new MatTableDataSource<any>([]);
  }

  ngOnInit() {
    this.displayedColumns = ['select', ...this.headers.map(header => header.key)];
    this.dataSource.data = this.data.map(item => ({ ...item, selected: false }));
    console.log('ContactsTable displayedColumns:', this.displayedColumns);
    console.log('ContactsTable dataSource:', this.dataSource.data);
  }

  ngAfterViewInit() {
    if (this.dataSource.data.length > 0) {
      this.dataSource.paginator = this.paginator;
      this.paginator.length = this.dataSource.data.length;
      this.paginator.pageSize = 5;
      this.paginator.firstPage();
      this.cdr.detectChanges();
      console.log('Paginator initialized:', this.paginator);
      console.log('Paginator length:', this.paginator.length);
      console.log('Displayed data:', this.dataSource.filteredData);
    }
  }

  onPageChange(event: PageEvent) {
    console.log('Page changed:', event);
    console.log('Displayed data:', this.dataSource.filteredData);
    this.cdr.detectChanges();
  }

  onCheckboxChange(row: any, checked: boolean) {
    row.selected = checked;
    this.cdr.detectChanges();
  }

  onSelectAll(event: any) {
    const checked = event.checked;
    this.dataSource.data = this.dataSource.data.map(item => ({ ...item, selected: checked }));
    this.cdr.detectChanges();
  }
}