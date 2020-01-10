import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstyearstudentdataComponent } from './firstyearstudentdata.component';

describe('FirstyearstudentdataComponent', () => {
  let component: FirstyearstudentdataComponent;
  let fixture: ComponentFixture<FirstyearstudentdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstyearstudentdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstyearstudentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
