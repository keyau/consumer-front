import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
import { AccountService } from '../../services/account.service';
import { AccountDetailComponent } from './account-detail.component';

describe('AccountDetailComponent', () => {
  let component: AccountDetailComponent;
  let fixture: ComponentFixture<AccountDetailComponent>;
  let accountServiceMock: jasmine.SpyObj<AccountService>;
  let routerMock: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const accountServiceSpy = jasmine.createSpyObj('AccountService', [
      'getAccount',
      'addSelection',
    ]);
    const activatedRouteMock = {
      snapshot: {
        paramMap: convertToParamMap({
          id: 'ec82fdb8-4fce-448b-b780-6773f57505f5',
        }),
      },
    };
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [AccountDetailComponent],
      providers: [
        { provide: AccountService, useValue: accountServiceSpy },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();

    accountServiceMock = TestBed.inject(
      AccountService
    ) as jasmine.SpyObj<AccountService>;
    routerMock = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    // initial setup
    accountServiceMock.getAccount.and.returnValue(of());
    accountServiceMock.addSelection.and.returnValue(of());
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
