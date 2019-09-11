import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgPaginationComponentModule} from '../../projects/ng-pagination-component/src/lib/ng-pagination-component.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgPaginationComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
