import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TableOutlineComponent } from './shared/table-outline/table-outline.component';
import { TableCheckboxComponent } from './shared/checkbox/checkbox.component';
import { ContactPageComponent } from './contacts/contact-page/contact-page.component';
import { PipelinehomeComponent } from './pipeline/pipelinehome/pipelinehome.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TableOutlineComponent,TableCheckboxComponent, RouterModule, ContactPageComponent, PipelinehomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}
