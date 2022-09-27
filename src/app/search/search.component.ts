import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { GithubService } from '../github/github.service';
import { SearchForm } from '../types/search.types';
import { Item } from '../types/user.types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  showSplash = true;
  searchForm = new FormGroup<SearchForm>({
    search: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    page: new FormControl<number>(1, { nonNullable: true }),
    per_page: new FormControl<number>(10, { nonNullable: true }),
    sort: new FormControl<string>('best match', { nonNullable: true }),
  });
  sortControl = new FormControl<string>('best match', { nonNullable: true });

  users: Item[] = [];
  total_count = 0;

  constructor(private _githubService: GithubService) {}

  ngOnInit(): void {
    this.searchForm.get('sort')?.valueChanges.pipe(
      switchMap((sort) => {
        const searchTerms = this.searchForm.getRawValue();
        return this._githubService.searchUsers({...searchTerms, sort});
      }),
    ).subscribe(({ items, total_count }) => {
      this.users = items;
      this.total_count = total_count;
    });
  }

  onSubmit(): void {
    this.showSplash = false;
    this.searchUsers();
  }

  searchUsers(): void {
    const searchTerms = this.searchForm.getRawValue();
    this._githubService.searchUsers(searchTerms).subscribe(({ items, total_count }) => {
      this.users = items;
      this.total_count = total_count;
    });
  }

  onClear(): void {
    this.searchForm.reset();
    this.showSplash = true;
  }

  onChangePage(page: number): void {
    this.searchForm.patchValue({ page });
    this.searchUsers();
  }

  onChangePageSize(per_page: number): void {
    this.searchForm.patchValue({ per_page });
    this.searchUsers();
  }
}
