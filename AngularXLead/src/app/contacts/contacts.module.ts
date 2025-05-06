import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { TableOutlineComponent } from '../shared/table-outline/table-outline.component';
import { TableCheckboxComponent } from '../shared/checkbox/checkbox.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    TableOutlineComponent, 
    TableCheckboxComponent,
    ContactPageComponent,
    SharedModule
  ]
})
export class ContactsModule { }
