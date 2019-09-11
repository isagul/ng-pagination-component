# Angular Pagination

[Live Demo](https://isagul.github.io/ng-pagination-component/)
Click the link and play with pagination component.

## Features  
- [x] Specify items count per page
- [x] Specify current page
- [x] Handle every click on buttons on pagination
  
## Installation  
#### Install ng-pagination-component
```  
  npm install --save ng-pagination-component  
```  
#### Import NgPaginationComponentModule and FormsModule modules:  
```javascript  
  import { NgPaginationComponentModule} from '@ng-pagination-component';  
  import { FormsModule } from '@angular/forms';  
    
  @NgModule({  
    declarations: [AppComponent],  
    imports: [NgPaginationComponentModule, FormsModule],  
    bootstrap: [AppComponent]  
  })  
  export class AppModule {}  
```  
  
# API  
### Inputs  
| Input  | Type | Default | Description  
| ------------- | ------------- | ------------- | -------------  
| paginationList| Array<any>  | [ ]  | Items array. 
| itemsPerPage| Number| 1 | Allows to specify items count per page. 
| currentPage| Number | 1  | Allows to specify current page.

### Outputs  
| Output  | Description  
| ------------- | -------------  
| newCurrentPage| It works when clicked on any button on pagination. It returns current page number as number.
