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
    'John',
    'Jack',
    'Mary',
    'Wesley',
    'David',
    'Ashley',
    'John',
    'Jack',
    'Mary',
    'Wesley',
    'David',
    'Ashley',
  ];
  public currentPage: 1;

  getNewCurrentPage(ev) {
    this.currentPage = ev;
  }
}
