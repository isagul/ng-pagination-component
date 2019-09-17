import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public peopleList = [
    {name: 'John', id: 1},
    {name: 'Jack', id: 2},
    {name: 'Mary', id: 3},
    {name: 'Wesley', id: 4},
    {name: 'David', id: 5},
    {name: 'Ashley', id: 6},
    {name: 'William', id: 7},
    {name: 'Oliver', id: 8},
    {name: 'James', id: 9},
    {name: 'Thomas', id: 10},
    {name: 'Martin', id: 11},
    {name: 'Lucas', id: 12},
    {name: 'Charlotte', id: 13},
    {name: 'Olivia', id: 14},
    {name: 'Emily', id: 15},
    {name: 'Grace', id: 16},
    {name: 'Mia', id: 17},
    {name: 'Amelia', id: 18}
  ];
  public currentPage = 1;
  public itemsPerPage = 3;
  public paginationLength: number;
  public countInfo = true;

  getNewCurrentPage(ev) {
    this.currentPage = ev;
  }

  getPageNumbersLength(ev) {
    this.paginationLength = ev;
  }

  getCountInfoValue() {
    const element = document.getElementById('selectCount') as HTMLInputElement;
    this.countInfo = element.value === 'true';
  }
}
