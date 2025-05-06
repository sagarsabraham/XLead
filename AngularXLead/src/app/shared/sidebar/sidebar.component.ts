import { Component, Input } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { IconTextComponent } from '../icon-text/icon-text.component';
import { RouterModule } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [ ProfileComponent, IconTextComponent, RouterModule, CommonModule,NgFor ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() navItems: { iconPath: string; text: string; route: string; isActive: boolean }[] = [];
  @Input() profile: { name: string; role: string } = { name: '', role: '' };
}
