import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table-outline',
  templateUrl: './table-outline.component.html',
  styleUrls: ['./table-outline.component.css'],
  imports: [CommonModule, MatTableModule, MatCheckboxModule, MatIconModule],
  standalone: true
})
export class TableOutlineComponent {
  @Input() headers: { key: string; label: string }[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() sortDirection: { [key: string]: 'asc' | 'desc' } = {};
  @Input() sortedColumn: string | null = null;
  @Output() selectAll = new EventEmitter<boolean>();
  @Output() sort = new EventEmitter<{ key: string, direction: 'asc' | 'desc' }>();

  onSelectAll(event: any): void {
    this.selectAll.emit(event.checked);
  }

  onSort(key: string): void {
    if (this.sortedColumn !== key) {
      // First click: sort ascending
      this.sort.emit({ key, direction: 'asc' });
    } else {
      // Toggle between asc and desc
      const newDirection = this.sortDirection[key] === 'asc' ? 'desc' : 'asc';
      this.sort.emit({ key, direction: newDirection });
    }
  }
}