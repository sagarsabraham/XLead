import { AfterViewInit, Component, Input, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator, PageEvent } from '@angular/material/paginator';
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

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator.length = this.dataSource.data.length;
    this.paginator.pageSize = 5;
    this.paginator.firstPage();
    this.cdr.detectChanges();
  
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
}