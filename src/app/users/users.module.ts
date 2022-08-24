import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { FilterUsersComponent } from './filter-users/filter-users.component';

@NgModule({
  declarations: [ListUsersComponent, FilterUsersComponent],
  imports: [CommonModule],
  //make it available outside the Users Module
  exports: [ListUsersComponent, FilterUsersComponent],
})
export class UsersModule {}
