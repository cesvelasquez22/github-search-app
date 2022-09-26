import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  changeSizePageControl = new FormControl<number>(10, { nonNullable: true });

  @Input() pageSizeOptions = [10, 20, 50, 100];
  @Output() onChangePage = new EventEmitter<number>();
  @Output() onChangePageSize = this.changeSizePageControl.valueChanges.pipe(
    distinctUntilChanged()
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
    if (this.page < 9) {
      this.page++;
      this.onChangePage.emit(this.page);
    }
  }

  onSizePageChange(size: number) {
    console.log(size);
    // this.onChangePage.emit(this.page);
    // this.onChangePageSize.emit(size);
  }
}
