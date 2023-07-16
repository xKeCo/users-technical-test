import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { User } from '../interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {}

  public getUsers() {
    return this.httpClient.get(this.url);
  }

  searchUserById(id: string): Observable<User | null> {
    return this.httpClient.get<User>(`${this.url}/${id}`).pipe(
      map((user) => (user ? user : null)),
      catchError(() => of(null))
    );
  }
}
