import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCarComponent } from './add-edit-car.component';
import { CarServiceService } from 'src/app/service/car_service/car-service.service';


describe('AddEditCarComponent', () => {
  let component: AddEditCarComponent;
  let service = CarServiceService;
  let fixture: ComponentFixture<AddEditCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditCarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
