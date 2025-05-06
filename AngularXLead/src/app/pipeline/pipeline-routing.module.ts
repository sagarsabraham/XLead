import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipelinehomeComponent } from './pipelinehome/pipelinehome.component';

const routes: Routes = [
  {path: '', component: PipelinehomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipelineRoutingModule { }
