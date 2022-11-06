/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoffieListComponent } from './coffie-list.component';

describe('CoffieListComponent', () => {
  let component: CoffieListComponent;
  let fixture: ComponentFixture<CoffieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
