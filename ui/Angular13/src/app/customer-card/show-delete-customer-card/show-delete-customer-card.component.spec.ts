import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeleteCustomerCardComponent } from './show-delete-customer-card.component';

describe('ShowDeleteCustomerCardComponent', () => {
  let component: ShowDeleteCustomerCardComponent;
  let fixture: ComponentFixture<ShowDeleteCustomerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDeleteCustomerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeleteCustomerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
