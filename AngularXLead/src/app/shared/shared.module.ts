import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ShortSidebarComponent } from './short-sidebar/short-sidebar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarComponent,
    ShortSidebarComponent
  ],
  exports: [SidebarComponent, ShortSidebarComponent]
})
export class SharedModule { }
