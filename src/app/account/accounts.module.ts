import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountAddComponent } from './components/account-add/account-add.component';
import { AccountListComponent } from './components/account-list/account-list.component';

@NgModule({
  declarations: [AccountListComponent, AccountAddComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class AccountsModule {}
