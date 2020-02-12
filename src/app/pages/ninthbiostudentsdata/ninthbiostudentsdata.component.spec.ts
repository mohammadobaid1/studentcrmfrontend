import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinthbiostudentsdataComponent } from './ninthbiostudentsdata.component';

describe('NinthbiostudentsdataComponent', () => {
  let component: NinthbiostudentsdataComponent;
  let fixture: ComponentFixture<NinthbiostudentsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinthbiostudentsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinthbiostudentsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
