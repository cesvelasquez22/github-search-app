import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsersResponse } from '../types/user.types';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private _http: HttpClient) {}

  searchUsers({ search = '', page = 1, per_page = 10, sort = 'best match' }) {
    return this._http.get<UsersResponse>(
      `${environment.GITHUB_API_URL}/search/users?q=${search}`,
      {
        params: {
          page,
          per_page,
          sort,
        },
      }
    );
  }
}
