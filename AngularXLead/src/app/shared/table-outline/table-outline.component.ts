import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { TableCheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'app-table-outline',
  templateUrl: './table-outline.component.html',
  styleUrls: ['./table-outline.component.css'],
  imports: [CommonModule, MatTableModule, MatCheckboxModule, MatIconModule, TableCheckboxComponent],
  standalone: true
})
export class TableOutlineComponent implements OnChanges {
  @Input() headers: { key: string; label: string }[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  @Input() sortDirection: { [key: string]: 'asc' | 'desc' } = {};
  @Input() sortedColumn: string | null = null;
  @Input() allSelected: boolean = false;
  @Input() someSelected: boolean = false;

  @Output() selectAll = new EventEmitter<boolean>();
  @Output() sort = new EventEmitter<{ key: string, direction: 'asc' | 'desc' }>();
  @Output() checkboxChange = new EventEmitter<{ row: any; checked: boolean }>();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataSource'] || changes['allSelected'] || changes['someSelected']) {
      this.cdr.detectChanges();
    }
  }

  onSelectAll(checked: boolean): void {
    this.selectAll.emit(checked);
    this.cdr.detectChanges();
  }

  onSort(key: string): void {
    if (this.sortedColumn !== key) {
      this.sort.emit({ key, direction: 'asc' });
    } else {
      const newDirection = this.sortDirection[key] === 'asc' ? 'desc' : 'asc';
      this.sort.emit({ key, direction: newDirection });
    }
  }

  get headerCheckboxIndeterminate(): boolean {
    return !this.allSelected && this.someSelected;
  }
}