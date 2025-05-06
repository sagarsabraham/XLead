import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-table-outline',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule
  ],
  templateUrl: './table-outline.component.html',
  styleUrls: ['./table-outline.component.css']
})
export class TableOutlineComponent implements OnInit {
  @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  @Input() displayedColumns: string[] = [];
  @Input() headers: { key: string; label: string }[] = [];

  ngOnInit() {
    if (!this.displayedColumns.length) {
      this.displayedColumns = ['select', ...this.headers.map(header => header.key)];
    }
    console.log('TableOutline displayedColumns:', this.displayedColumns);
    console.log('TableOutline dataSource:', this.dataSource.data);
  }

  onSelectAll(event: any) {
    const checked = event.checked;
    this.dataSource.data = this.dataSource.data.map(item => ({ ...item, selected: checked }));
  }
}