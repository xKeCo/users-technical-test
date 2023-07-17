import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsersRoutingModule } from './users/users-routing.module';
import { RouterModule } from '@angular/router';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    UsersRoutingModule,
    SharedModule,
    HttpClientModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
