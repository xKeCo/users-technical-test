import { Component } from '@angular/core';
import { User } from 'src/app/users/interfaces/users';
import { UsersService } from 'src/app/users/services/users.service';

@Component({
  selector: 'shared-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  public users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users: any) => {
      this.users = users;
    });
  }

  searchByName(term: string): void {}
}
