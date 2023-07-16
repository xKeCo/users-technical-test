import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { UserListComponent } from './shared/pages/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'users',
    component: UserListComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
