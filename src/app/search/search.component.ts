import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GithubService } from '../github/github.service';
import { SearchForm } from '../types/search.types';
import { Item } from '../types/user.types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  showSplash = false;
  searchForm = new FormGroup<SearchForm>({
    search: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    page: new FormControl<number>(1, { nonNullable: true }),
    per_page: new FormControl<number>(10, { nonNullable: true }),
  });

  users: Item[] = [];

  constructor(private _githubService: GithubService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.showSplash = false;
    this.searchUsers();
  }

  searchUsers(): void {
    const searchTerms = this.searchForm.getRawValue();
    this._githubService.searchUsers(searchTerms).subscribe(({ items }) => {
      this.users = items;
    });
  }

  onClear(): void {
    this.searchForm.reset();
    this.showSplash = true;
  }

  onChangePageSize(per_page: number): void {
    this.searchForm.patchValue({ per_page });
    this.searchUsers();
  }
}
