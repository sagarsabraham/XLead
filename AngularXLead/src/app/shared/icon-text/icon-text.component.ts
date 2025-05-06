import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-text',
  imports: [ IconComponent, CommonModule ],
  templateUrl: './icon-text.component.html',
  styleUrl: './icon-text.component.css'
})
export class IconTextComponent {
  @Input() iconPath: string = '';
  @Input() text: string = '';
  @Input() isActive: boolean = false;
}
