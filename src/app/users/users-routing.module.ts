import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailsComponent } from './pages/user-details/user-details.component';

const routes: Routes = [
  {
    path: 'details/:id',
    component: UserDetailsComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: 'users',
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
