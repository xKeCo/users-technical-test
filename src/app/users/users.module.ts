import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
