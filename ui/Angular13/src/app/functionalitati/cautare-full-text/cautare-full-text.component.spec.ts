import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CautareFullTextComponent } from './cautare-full-text.component';

describe('CautareFullTextComponent', () => {
  let component: CautareFullTextComponent;
  let fixture: ComponentFixture<CautareFullTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CautareFullTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CautareFullTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
