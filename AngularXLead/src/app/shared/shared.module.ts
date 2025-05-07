import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { TableCheckboxComponent } from './checkbox/checkbox.component';
import { TableOutlineComponent } from './table-outline/table-outline.component';
import { ExportComponent } from './export/export.component';
import { HaedersearchComponent } from '../contacts/haedersearch/haedersearch.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    FormsModule,ExportComponent,HaedersearchComponent,TableCheckboxComponent,TableOutlineComponent
  ],
  exports: [TableCheckboxComponent,TableOutlineComponent,HaedersearchComponent]
})
export class SharedModule { }