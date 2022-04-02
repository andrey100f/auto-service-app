import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCustomerCardComponent } from './add-edit-customer-card.component';

describe('AddEditCustomerCardComponent', () => {
  let component: AddEditCustomerCardComponent;
  let fixture: ComponentFixture<AddEditCustomerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCustomerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCustomerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
