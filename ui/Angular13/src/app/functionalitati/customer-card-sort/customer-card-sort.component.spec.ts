import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCardSortComponent } from './customer-card-sort.component';

describe('CustomerCardSortComponent', () => {
  let component: CustomerCardSortComponent;
  let fixture: ComponentFixture<CustomerCardSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCardSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCardSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
