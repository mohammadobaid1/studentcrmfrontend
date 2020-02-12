import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricregularstudentsdataComponent } from './matricregularstudentsdata.component';

describe('MatricregularstudentsdataComponent', () => {
  let component: MatricregularstudentsdataComponent;
  let fixture: ComponentFixture<MatricregularstudentsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatricregularstudentsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatricregularstudentsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
