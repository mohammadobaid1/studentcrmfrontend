import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinthcomputerstudentsdataComponent } from './ninthcomputerstudentsdata.component';

describe('NinthcomputerstudentsdataComponent', () => {
  let component: NinthcomputerstudentsdataComponent;
  let fixture: ComponentFixture<NinthcomputerstudentsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinthcomputerstudentsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinthcomputerstudentsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
