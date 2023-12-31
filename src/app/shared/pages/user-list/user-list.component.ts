import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/services/users.service';
import { User } from 'src/app/users/interfaces/users';

@Component({
  selector: 'shared-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  public users?: User[];

  public results?: User[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users: any) => {
      if (!users) return console.log('No users found');

      this.users = users;
      this.results = users;
    });
  }

  searchByName(term: string) {
    this.results = this.users?.filter((user) => {
      return user.name.toLowerCase().includes(term.toLowerCase());
    });
  }
}
