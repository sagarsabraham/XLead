import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { TableCheckboxComponent } from './checkbox/checkbox.component';
import { TableOutlineComponent } from './table-outline/table-outline.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShortSidebarComponent } from './short-sidebar/short-sidebar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    TableCheckboxComponent,
    TableOutlineComponent,
    ShortSidebarComponent,
    SidebarComponent,
    FormsModule,
    PageNotFoundComponent,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    TableCheckboxComponent,
    TableOutlineComponent,
    SidebarComponent,
    ShortSidebarComponent, 
    PageNotFoundComponent
  ],



})
export class SharedModule { }