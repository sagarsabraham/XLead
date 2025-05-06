import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class TableCheckboxComponent {
  @Input() isChecked: boolean = false;
  @Output() checkboxChange = new EventEmitter<boolean>();

  onCheckboxChange(event: MatCheckboxChange) {
    this.checkboxChange.emit(event.checked);
  }
} 