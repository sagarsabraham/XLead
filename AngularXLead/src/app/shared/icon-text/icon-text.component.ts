import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-icon-text',
  templateUrl: './icon-text.component.html',
  styleUrls: ['./icon-text.component.css']
})
export class IconTextComponent {
  @Input() iconPath: string = '';
  @Input() text: string = '';
  @Input() isActive: boolean = false;
  @Input() route: string = ''; // Route to navigate to when clicked

  constructor(private router: Router) {}

  navigate() {
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }
}