import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricsciencestudentsdataComponent } from './matricsciencestudentsdata.component';

describe('MatricsciencestudentsdataComponent', () => {
  let component: MatricsciencestudentsdataComponent;
  let fixture: ComponentFixture<MatricsciencestudentsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatricsciencestudentsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatricsciencestudentsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
