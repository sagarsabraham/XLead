import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PageNotFoundComponent,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],

  exports: [PageNotFoundComponent]
})
export class SharedModule { }
