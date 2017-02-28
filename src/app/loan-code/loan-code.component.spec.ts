/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoanCodeComponent } from './loan-code.component';

describe('LoanCodeComponent', () => {
  let component: LoanCodeComponent;
  let fixture: ComponentFixture<LoanCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
