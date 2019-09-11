import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'paginate',
  pure: false
})

export class PaginationPipe implements PipeTransform {
  transform(value: any, arg1): any {
    const indexOfLastTodo = arg1.currentPage * arg1.itemsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - arg1.itemsPerPage;
    return value.slice(indexOfFirstTodo, indexOfLastTodo);
  }
}
