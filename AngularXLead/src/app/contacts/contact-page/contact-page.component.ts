import { Component } from '@angular/core';
import { TableOutlineComponent } from '../../shared/table-outline/table-outline.component';
import { TableCheckboxComponent } from '../../shared/checkbox/checkbox.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-contact-page',
  imports: [TableOutlineComponent, TableCheckboxComponent, CommonModule, SharedModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

}
