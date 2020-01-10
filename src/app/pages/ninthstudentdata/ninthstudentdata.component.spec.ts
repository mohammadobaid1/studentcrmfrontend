import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinthstudentdataComponent } from './ninthstudentdata.component';

describe('NinthstudentdataComponent', () => {
  let component: NinthstudentdataComponent;
  let fixture: ComponentFixture<NinthstudentdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinthstudentdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinthstudentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
