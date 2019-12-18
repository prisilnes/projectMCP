import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnGpsComponent } from './turn-gps.component';

describe('TurnGpsComponent', () => {
  let component: TurnGpsComponent;
  let fixture: ComponentFixture<TurnGpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnGpsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnGpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
