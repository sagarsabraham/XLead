import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-export',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent {
  @Input() iconName: string = '';
  @Input() buttonText: string = '';
}