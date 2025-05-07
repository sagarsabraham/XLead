import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-export',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent {
  @Input() iconName: string = '';
  @Input() buttonText: string = '';
}