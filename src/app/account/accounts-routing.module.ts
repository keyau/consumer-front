import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountAddComponent } from './components/account-add/account-add.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { AccountListComponent } from './components/account-list/account-list.component';

const routes: Routes = [
  {
    path: 'accounts',
    children: [
      {
        path: '',
        component: AccountListComponent,
      },
      {
        path: 'add',
        component: AccountAddComponent,
      },
      {
        path: ':id',
        component: AccountDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
