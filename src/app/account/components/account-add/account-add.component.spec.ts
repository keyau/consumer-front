import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';
import { AccountService } from '../../services/account.service';
import { AccountAddComponent } from './account-add.component';

describe('AccountAddComponent', () => {
  let component: AccountAddComponent;
  let fixture: ComponentFixture<AccountAddComponent>;
  let accountServiceMock: jasmine.SpyObj<AccountService>;
  let formBuilderMock: jasmine.SpyObj<FormBuilder>;
  let matSnackBarMock: jasmine.SpyObj<MatSnackBar>;
  let routerMock: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const accountServiceSpy = jasmine.createSpyObj('AccountService', [
      'addAccount',
    ]);
    const formBuilderSpy = jasmine.createSpyObj('FormBuilder', ['group']);
    const matSnackBarSpy = jasmine.createSpyObj('MatSnackBar', [
      'openFromComponent',
    ]);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [AccountAddComponent],
      providers: [
        { provide: AccountService, useValue: accountServiceSpy },
        { provide: FormBuilder, useValue: formBuilderSpy },
        { provide: MatSnackBar, useValue: matSnackBarSpy },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();

    accountServiceMock = TestBed.inject(
      AccountService
    ) as jasmine.SpyObj<AccountService>;
    formBuilderMock = TestBed.inject(
      FormBuilder
    ) as jasmine.SpyObj<FormBuilder>;
    matSnackBarMock = TestBed.inject(
      MatSnackBar
    ) as jasmine.SpyObj<MatSnackBar>;
    routerMock = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    // initial setup
    accountServiceMock.addAccount.and.returnValue(of());
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
