import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dealfooter',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './dealfooter.component.html',
  styleUrl: './dealfooter.component.css'
})
export class DealfooterComponent {
  @Output() collapse = new EventEmitter<void>();

  onCollapse() {
    this.collapse.emit();
  }
}
