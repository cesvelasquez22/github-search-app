import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsersResponse } from '../types/user.types';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private _http: HttpClient) {}

  searchUsers(searchTerm: string, page = 1, perPage = 9, sort = 'best match') {
    return this._http.get<UsersResponse>(
      `${environment.GITHUB_API_URL}/search/users?q=${searchTerm}`,
      {
        params: {
          page: page.toString(),
          per_page: perPage.toString(),
          sort: sort,
        },
      }
    );
  }
}
