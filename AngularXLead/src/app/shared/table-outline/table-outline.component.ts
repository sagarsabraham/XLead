import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { HaedersearchComponent } from '../../contacts/haedersearch/haedersearch.component';

@Component({
  selector: 'app-table-outline',
  templateUrl: './table-outline.component.html',
  styleUrls: ['./table-outline.component.css'],
  imports: [CommonModule,MatTableModule,MatCheckboxModule,MatIconModule,HaedersearchComponent]
})
export class TableOutlineComponent {
  @Input() headers: { key: string; label: string }[] = [];
  @Input() displayedColumns: string[] = [];
  @Output() selectAll = new EventEmitter<boolean>();

  onSelectAll(event: any): void {
    this.selectAll.emit(event.checked);
  }
}