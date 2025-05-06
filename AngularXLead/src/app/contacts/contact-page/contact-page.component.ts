import { Component } from '@angular/core';
import { ContactsTableComponent } from '../../shared/contacts-table/contacts-table.component';
// import { TableCheckboxComponent } from '../../shared/checkbox/checkbox.component';
// import { TableOutlineComponent } from '../../shared/table-outline/table-outline.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    ContactsTableComponent
   
  ],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
  tableData: any[] = [
    { name: 'Ted Watson', company: 'Harley', email: 'tedwatson@email.com', phone: '+1 563456273', owner: 'Harinand S' },
    { name: 'Hari', company: 'Bayada', email: 'hari@gmail.com', phone: '+91 45479270', owner: 'Harinand S' },
    { name: 'Hriore wqw', company: 'Stellantis', email: 'hri@yahoo.com', phone: '+1 744378304', owner: 'Harinand S' },
    { name: 'Hello hello', company: 'Something', email: 'hello@email.com', phone: '+91 468378920', owner: 'Harinand S' },
    { name: 'Hello hello', company: 'Something', email: 'hello@email.com', phone: '+91 468378920', owner: 'Harinand S' },
    { name: 'Hello hello', company: 'Something', email: 'hello@email.com', phone: '+91 468378920', owner: 'Harinand S' },
    { name: 'Hello hello', company: 'Something', email: 'hello@email.com', phone: '+91 468378920', owner: 'Harinand S' },
    { name: 'Hello hello', company: 'Something', email: 'hello@email.com', phone: '+91 468378920', owner: 'Harinand S' },
  ];

  tableHeaders: { key: string; label: string }[] = [
    { key: 'name', label: 'Contact Name' },
    { key: 'company', label: 'Company Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'owner', label: 'Contact Owner' }
  ];
}