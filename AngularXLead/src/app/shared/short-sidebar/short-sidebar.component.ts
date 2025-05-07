import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-short-sidebar',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './short-sidebar.component.html',
  styleUrls: ['./short-sidebar.component.css'],
})
export class ShortSidebarComponent {
  @Input() icons: string[] = [];
  @Input() name: string = '';
  @Input() role: string = '';

  @Input() navItems: { iconPath: string; text: string; route: string; isActive: boolean }[] = [];
  @Input() profile: { name: string; role: string } = { name: '', role: '' };

  get initials(): string {
    if (!this.name) return '';
    const nameParts = this.name.trim().split(' ');
    if (nameParts.length === 1) {
      return nameParts[0].charAt(0).toUpperCase();
    }
    const firstInitial = nameParts[0].charAt(0).toUpperCase();
    const lastInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
  }
}