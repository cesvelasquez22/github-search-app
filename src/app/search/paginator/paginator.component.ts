import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  changeSizePageControl = new FormControl<number>(10, { nonNullable: true });

  @Input() pageSizeOptions = [10, 20, 50, 100];
  @Input() totalCount = 0;
  @Output() onChangePage = new EventEmitter<number>();
  @Output() onChangePageSize = this.changeSizePageControl.valueChanges.pipe(
    distinctUntilChanged(),
    tap((value) => {
      this.page = 1;
      this.onChangePage.emit(this.page);
    }),
  );
  page = 1;

  constructor() {}

  ngOnInit(): void {}

  onPrev() {
    if (this.page > 1) {
      this.page--;
      this.onChangePage.emit(this.page);
    }
  }

  onNext() {
    console.log('onNext', this.changeSizePageControl.value);
    if (this.page < this.changeSizePageControl.value) {
      this.page++;
      this.onChangePage.emit(this.page);
    }
  }
}
