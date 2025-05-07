import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ExportComponent } from '../../export/export.component';


@Component({
  selector: 'app-haedersearch',
  standalone: true,
  imports: [
    FormsModule,
    ExportComponent,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './headersearch.component.html',
  styleUrls: ['./headersearch.component.css']
})
export class HeadersearchComponent {
  searchText: string = '';
  posts = [
    {
      iconName: 'description',
      buttonText: 'Export'
    }
  ];

  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.searchText);
  }

  onExport() {
    console.log('Export clicked');
    // Implement export logic later
  }
}