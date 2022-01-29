import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
})
export class AccountListComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'nbCredits', 'action'];
  accounts: Account[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountService
      .getAccounts()
      .subscribe((accounts) => (this.accounts = accounts));
  }
}
