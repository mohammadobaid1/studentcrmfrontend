import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinthregularstudentsdataComponent } from './ninthregularstudentsdata.component';

describe('NinthregularstudentsdataComponent', () => {
  let component: NinthregularstudentsdataComponent;
  let fixture: ComponentFixture<NinthregularstudentsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinthregularstudentsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinthregularstudentsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
