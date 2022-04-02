import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDeleteCarComponent } from './show-delete-car.component';

describe('ShowDeleteCarComponent', () => {
  let component: ShowDeleteCarComponent;
  let fixture: ComponentFixture<ShowDeleteCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDeleteCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDeleteCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
