import { Component ,EventEmitter, Output,Input} from '@angular/core';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';


@Component({
  selector: 'app-export',
  imports: [MatIcon],
  templateUrl: './export.component.html',
  styleUrl: './export.component.css'
})
export class ExportComponent{
  @Input() iconName='';
  @Input() buttonText='';
  
}


 

