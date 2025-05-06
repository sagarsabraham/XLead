import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-outline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mat-elevation-z8 table-container">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .mat-elevation-z8 {
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }

    .table-container {
      width: 100%;
      border-radius: 4px;
      overflow: hidden;
    }
  `]
})
export class TableOutlineComponent {}