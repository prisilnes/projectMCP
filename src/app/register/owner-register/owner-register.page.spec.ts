import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRegisterPage } from './owner-register.page';

describe('OwnerRegisterPage', () => {
  let component: OwnerRegisterPage;
  let fixture: ComponentFixture<OwnerRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerRegisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
