import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserManagementModuleComponent } from './components/user-management-module/user-management-module.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    HomePageComponent,
    UserListComponent,
    UserManagementModuleComponent,
    SearchBarComponent,
    UserCardComponent,
    LoaderComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HomePageComponent,
    UserListComponent,
    UserManagementModuleComponent,
    SearchBarComponent,
    LoaderComponent,
  ],
})
export class SharedModule {}
