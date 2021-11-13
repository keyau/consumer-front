import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MessageToastComponent } from './message-toast.component';

describe('MessageToastComponent', () => {
  let component: MessageToastComponent;
  let fixture: ComponentFixture<MessageToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageToastComponent],
      providers: [{ provide: MAT_SNACK_BAR_DATA, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
