import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css'],
})
export class AccountDetailComponent implements OnInit {
  account?: Account;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAccount();
  }

  getAccount(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.accountService
      .getAccount(id)
      .subscribe((account) => (this.account = account));
  }

  addSelection(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.accountService.addSelection(id).subscribe(() => this.getAccount());
  }

  goToAccounts(): void {
    this.router.navigate(['/accounts']);
  }
}
