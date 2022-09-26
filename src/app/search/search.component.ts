import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GithubService } from '../github/github.service';
import { Item } from '../types/user.types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  showSplash = false;
  searchForm: FormGroup = new FormGroup({});

  users: Item[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _githubService: GithubService
  ) {
    this._initForm();
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.showSplash = false;
    const searchTerm = this.searchForm.get('search')?.value;
    this._githubService
      .searchUsers(searchTerm)
      .subscribe(({ items, total_count }) => {
        this.users = items;
      });
  }

  onClear(): void {
    this.searchForm.reset();
    this.showSplash = true;
  }

  private _initForm(): void {
    this.searchForm = this._formBuilder.group({
      search: [''],
    });
  }
}
