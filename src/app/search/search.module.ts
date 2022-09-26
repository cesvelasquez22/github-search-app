import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { PaginatorComponent } from './paginator/paginator.component';


@NgModule({
  declarations: [
    SearchComponent,
    UsersComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
  ]
})
export class SearchModule { }
