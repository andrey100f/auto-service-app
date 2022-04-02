import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeleteTransactionComponent } from './show-delete-transaction.component';

describe('ShowDeleteTransactionComponent', () => {
  let component: ShowDeleteTransactionComponent;
  let fixture: ComponentFixture<ShowDeleteTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDeleteTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeleteTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
