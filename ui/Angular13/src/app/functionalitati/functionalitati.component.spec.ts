import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalitatiComponent } from './functionalitati.component';

describe('FunctionalitatiComponent', () => {
  let component: FunctionalitatiComponent;
  let fixture: ComponentFixture<FunctionalitatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalitatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalitatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
