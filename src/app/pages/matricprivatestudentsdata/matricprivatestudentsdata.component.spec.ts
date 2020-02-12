import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricprivatestudentsdataComponent } from './matricprivatestudentsdata.component';

describe('MatricprivatestudentsdataComponent', () => {
  let component: MatricprivatestudentsdataComponent;
  let fixture: ComponentFixture<MatricprivatestudentsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatricprivatestudentsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatricprivatestudentsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
