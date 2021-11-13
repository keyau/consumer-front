import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { AccountService } from '../../services/account.service';
import { AccountListComponent } from './account-list.component';

describe('AccountListComponent', () => {
  let component: AccountListComponent;
  let fixture: ComponentFixture<AccountListComponent>;
  let accountServiceMock: jasmine.SpyObj<AccountService>;

  beforeEach(async () => {
    const accountServiceSpy = jasmine.createSpyObj('AccountService', [
      'getAccounts',
    ]);

    await TestBed.configureTestingModule({
      declarations: [AccountListComponent],
      providers: [{ provide: AccountService, useValue: accountServiceSpy }],
    }).compileComponents();

    accountServiceMock = TestBed.inject(
      AccountService
    ) as jasmine.SpyObj<AccountService>;

    // initial setup
    accountServiceMock.getAccounts.and.returnValue(of([]));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
