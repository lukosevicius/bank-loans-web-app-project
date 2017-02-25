/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SliderisComponent } from './slider.component';

describe('SliderisComponent', () => {
  let component: SliderisComponent;
  let fixture: ComponentFixture<SliderisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
