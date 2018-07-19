/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JustComponent } from './just.component';

describe('JustComponent', () => {
  let component: JustComponent;
  let fixture: ComponentFixture<JustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
