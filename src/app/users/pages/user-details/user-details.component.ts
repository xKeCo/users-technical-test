import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/users';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  public user?: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.usersService.searchUserById(id).subscribe((user: any) => {
        if (!user) return this.router.navigateByUrl('/users');

        return (this.user = user);
      });
    });
  }

  goToUrl(url: string | undefined): void {
    this.document.location.href = 'https://' + url;
  }
}
