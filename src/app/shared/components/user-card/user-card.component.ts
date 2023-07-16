import { Component, Input } from '@angular/core';
import { User } from 'src/app/users/interfaces/users';

@Component({
  selector: 'shared-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() public user = {} as User;

  // More details button state (true = show, false = hide)
  public showMoreDetails = false;

  // Toggle more details button state
  toggleMoreDetails(): void {
    this.showMoreDetails = !this.showMoreDetails;
  }
}
