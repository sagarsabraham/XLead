import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  standalone: true,
  imports: [CommonModule, MatCheckboxModule]
})
export class TableCheckboxComponent implements OnChanges {
  @Input() isChecked: boolean = false;
  @Input() isIndeterminate: boolean = false;
  @Output() checkboxChange = new EventEmitter<boolean>();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isChecked'] || changes['isIndeterminate']) {
      this.cdr.detectChanges();
    }
  }

  onChange(checked: boolean) {
    this.isChecked = checked;
    this.checkboxChange.emit(checked);
    this.cdr.detectChanges();
  }
}