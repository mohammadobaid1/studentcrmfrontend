import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondyearstudentdataComponent } from './secondyearstudentdata.component';

describe('SecondyearstudentdataComponent', () => {
  let component: SecondyearstudentdataComponent;
  let fixture: ComponentFixture<SecondyearstudentdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondyearstudentdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondyearstudentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
