import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SharedModule } from '../shared/shared.module';

import { ContactRoutingModule } from './contacts-routing.module';
import { ContactsTableComponent } from '../shared/contacts-table/contacts-table.component';
import { TableCheckboxComponent } from '../shared/checkbox/checkbox.component';
import { TableOutlineComponent } from '../shared/table-outline/table-outline.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    ContactPageComponent,
    ContactsTableComponent,
    TableCheckboxComponent,
    TableOutlineComponent
  ],
  imports: [
    CommonModule,
    TableOutlineComponent, 
    TableCheckboxComponent,
    ContactPageComponent,
    SharedModule,
    ContactRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class ContactsModule { }