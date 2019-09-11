import { NgModule } from '@angular/core';
import { NgPaginationComponentComponent } from './ng-pagination-component.component';
import {PaginationPipe} from './ng-pagination-component.pipe';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [NgPaginationComponentComponent, PaginationPipe],
  imports: [ CommonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [NgPaginationComponentComponent, PaginationPipe]
})
export class NgPaginationComponentModule { }
