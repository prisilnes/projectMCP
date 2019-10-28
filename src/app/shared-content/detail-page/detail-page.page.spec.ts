import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPagePage } from './detail-page.page';

describe('DetailPagePage', () => {
  let component: DetailPagePage;
  let fixture: ComponentFixture<DetailPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
