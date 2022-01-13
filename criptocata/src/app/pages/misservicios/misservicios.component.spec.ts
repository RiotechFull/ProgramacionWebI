/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MisserviciosComponent } from './misservicios.component';

describe('MisserviciosComponent', () => {
  let component: MisserviciosComponent;
  let fixture: ComponentFixture<MisserviciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisserviciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
