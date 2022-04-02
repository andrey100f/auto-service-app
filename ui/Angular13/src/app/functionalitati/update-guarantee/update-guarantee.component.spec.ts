import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGuaranteeComponent } from './update-guarantee.component';

describe('UpdateGuaranteeComponent', () => {
  let component: UpdateGuaranteeComponent;
  let fixture: ComponentFixture<UpdateGuaranteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGuaranteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGuaranteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
