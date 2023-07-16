import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {}

  public getUsers() {
    return this.httpClient.get(this.url);
  }

  searchUsers(term: string) {
    return this.httpClient.get(`${this.url}?name_like=${term}`);
  }
}
