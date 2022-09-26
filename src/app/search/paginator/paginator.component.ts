import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  page = 1;

  constructor() {}

  ngOnInit(): void {}

  onPrev() {
    if (this.page > 1) {
      this.page--;
    }
  }

  onNext() {
    if (this.page < 9) {
      this.page++;
    }
  }
}
