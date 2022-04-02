import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomGenerateComponent } from './random-generate.component';

describe('RandomGenerateComponent', () => {
  let component: RandomGenerateComponent;
  let fixture: ComponentFixture<RandomGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomGenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
