/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImaggingComponent } from './imagging.component';

describe('ImaggingComponent', () => {
  let component: ImaggingComponent;
  let fixture: ComponentFixture<ImaggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImaggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImaggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
