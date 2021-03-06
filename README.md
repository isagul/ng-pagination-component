# Angular Pagination [![npm version](https://badge.fury.io/js/ng-pagination-component.svg)](https://badge.fury.io/js/ng-pagination-component)

[Live Demo](https://isagul.github.io/ng-pagination-component/)
Click the link and play with pagination component.

## Features  
- [x] Specify items count per page
- [x] Specify current page
- [x] Handle every click on buttons on pagination
- [x] Show count of items per page.
  
## Installation  
#### Install ng-pagination-component
```  
  npm install --save ng-pagination-component  
```  
#### Simple Example  
```javascript  
  //app.module.ts
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { AppComponent } from './app.component';
  import { NgPaginationComponentModule} from 'ng-pagination-component';  
  import { FormsModule } from '@angular/forms';  
    
  @NgModule({  
    declarations: [AppComponent],  
    imports: [BrowserModule, NgPaginationComponentModule, FormsModule],  
    bootstrap: [AppComponent]  
  })  
  export class AppModule {}  
```  
```javascript
//app.component.ts
import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    template: `
	<ul>
            <li *ngFor="let item of items | paginate: { itemsPerPage: itemsPerPage, currentPage: currentPage }">
                {{item}}	
            </li>
	 </ul>
  
	 <lib-ng-pagination-component 
            [itemsPerPage]="itemsPerPage"  
            [currentPage]="currentPage"  
            [paginationList]="items"
            [countInfo]="true"  
            (newCurrentPage)="getNewCurrentPage($event)">
	 </lib-ng-pagination-component>
	 `
})
export class AppComponent{
    itemsPerPage: 5;
    currentPage: 1;
    items = []; 

	getNewCurrentPage(e) {  
	  this.currentPage = e;  
	}
}
```
  
# API  
### Inputs  
| Input  | Type | Default | Description  
| ------------- | ------------- | ------------- | -------------  
| paginationList| Array<any>  | [ ]  | Items array. 
| itemsPerPage| Number| 1 | Allows to specify items count per page. 
| currentPage| Number | 1  | Allows to specify current page.
| countInfo| Boolean | false  | Allows to showing count of items per page.

### Outputs  
| Output  | Description  
| ------------- | -------------  
| newCurrentPage| It works when clicked on any button on pagination. It returns current page number as number.
