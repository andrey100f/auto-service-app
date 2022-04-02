import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadeDeleteComponent } from './cascade-delete.component';

describe('CascadeDeleteComponent', () => {
  let component: CascadeDeleteComponent;
  let fixture: ComponentFixture<CascadeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CascadeDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
