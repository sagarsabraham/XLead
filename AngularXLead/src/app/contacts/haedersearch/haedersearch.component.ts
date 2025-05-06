import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExportComponent } from '../export/export.component';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'; // Needed for matInput
import { MatIconModule } from '@angular/material/icon'; // For mat-icon
import { MatButtonModule } from '@angular/material/button'; // For mat-butto



@Component({
  selector: 'app-haedersearch',
  imports: [ExportComponent,MatIcon,MatButtonModule,MatIconModule,MatInputModule],
  templateUrl: './haedersearch.component.html',
  styleUrl: './haedersearch.component.css'
})
export class HaedersearchComponent {
  searchText: string = '';
  posts=[
    {iconName:'description',
      buttonText :'Export'
    }
  ]
  
  @Output() search = new EventEmitter<string>();
  
  onSearch() {
    this.search.emit(this.searchText);
  }

  onExport() {
    console.log('Export clicked');
    // Implement your export logic here
  }

}