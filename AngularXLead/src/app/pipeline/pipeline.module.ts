import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelineRoutingModule } from './pipeline-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DealbodyComponent } from './dealbody/dealbody.component';
import { DealcardComponent } from './dealcard/dealcard.component';
import { DealheaderComponent } from './dealheader/dealheader.component';
import { PipelinehomeComponent } from './pipelinehome/pipelinehome.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PipelineRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    DealbodyComponent,
    DealcardComponent,
    DealheaderComponent,
    PipelinehomeComponent,
    DragDropModule,
    SharedModule
  ]
})
export class PipelineModule { }
