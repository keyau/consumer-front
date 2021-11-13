import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MessageToastComponent } from 'src/app/shared/components/message-toast/message-toast.component';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css'],
})
export class AccountAddComponent {
  accountForm = this.formBuilder.group({
    nbCredits: '',
  });

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) {}

  onSubmit(): void {
    const nbCredits = this.accountForm.get('nbCredits')?.value;

    if (!nbCredits) {
      return;
    }
    this.accountService
      .addAccount({ nbCredits } as Account)
      .subscribe((account) => {
        this.showMessage(`Account ${account._id} is created`);
      });
    console.warn('Your account has been submitted', this.accountForm.value);
    this.accountForm.reset();
  }

  goToAccounts(): void {
    this.router.navigate(['/accounts']);
  }

  private showMessage(message: string): void {
    this.matSnackBar.openFromComponent(MessageToastComponent, {
      duration: 2 * 1000,
      data: { message: message },
    });
  }
}
