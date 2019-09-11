import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'lib-ng-pagination-component',
  templateUrl: 'ng-pagination-component.component.html',
  styleUrls: ['ng-pagination-component.component.scss']
})
export class NgPaginationComponentComponent implements OnInit, OnChanges, OnDestroy {
  @Input() paginationList = [];
  @Input() itemsPerPage = 1;
  @Input() currentPage = 1;
  @Output() newCurrentPage = new EventEmitter<any>();
  @Output() pageNumbersLength = new EventEmitter<any>();
  public pageNumbers = [];
  public getClickedNumber: number;
  constructor() {

  }

  ngOnInit(): void {
    if (this.getClickedNumber === undefined) {
      this.getClickedNumber = this.currentPage;
    }
  }

  ngOnChanges() {
    this.pageNumbers = [];
    if (this.paginationList.length > 0 && this.itemsPerPage !== null && this.itemsPerPage > 0) {
      for (let i = 1; i <= Math.ceil(this.paginationList.length / this.itemsPerPage); i++) {
        this.pageNumbers.push(i);
      }
    }
    this.pageNumbersLength.emit(this.pageNumbers.length);
    this.getClickedNumber = this.currentPage;
  }

  getPageNumber(number) {
    this.newCurrentPage.emit(number);
    this.getClickedNumber = number;
  }

  goPrevPage() {
    this.newCurrentPage.emit(this.getClickedNumber - 1);
    this.getClickedNumber--;
  }

  goNextPage() {
    this.newCurrentPage.emit(this.getClickedNumber + 1);
    this.getClickedNumber++;
  }

  ngOnDestroy(): void {
  }

}
