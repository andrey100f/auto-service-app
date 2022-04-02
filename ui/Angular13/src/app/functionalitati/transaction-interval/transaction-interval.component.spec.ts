import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionIntervalComponent } from './transaction-interval.component';

describe('TransactionIntervalComponent', () => {
  let component: TransactionIntervalComponent;
  let fixture: ComponentFixture<TransactionIntervalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionIntervalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
