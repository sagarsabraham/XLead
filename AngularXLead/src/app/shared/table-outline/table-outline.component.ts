import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-table-outline',
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule, MatIconModule],
  templateUrl: './table-outline.component.html',
  styleUrls: ['./table-outline.component.css']
})
export class TableOutlineComponent {
  displayedColumns: string[] = ['select', 'contactName', 'companyName', 'email', 'phone', 'contactOwner'];

  onSelectAll(event: any) {
    console.log('Select all:', event.checked);
  }
}