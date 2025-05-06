import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TableOutlineComponent } from './shared/table-outline/table-outline.component';
import { TableCheckboxComponent } from './shared/checkbox/checkbox.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TableOutlineComponent,TableCheckboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';
}
