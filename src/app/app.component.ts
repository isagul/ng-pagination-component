import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public peopleList = [
    'John',
    'Jack',
    'Mary',
    'Wesley',
    'David',
    'Ashley',
    'William',
    'Oliver',
    'James',
    'Thomas',
    'Martin',
    'Lucas',
    'Charlotte',
    'Olivia',
    'Emily',
    'Grace',
    'Mia',
    'Amelia',
  ];
  public currentPage =  1;
  public itemsPerPage = 3;

  getNewCurrentPage(ev) {
    this.currentPage = ev;
  }
}
