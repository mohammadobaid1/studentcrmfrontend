import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinthprivatestudentsdataComponent } from './ninthprivatestudentsdata.component';

describe('NinthprivatestudentsdataComponent', () => {
  let component: NinthprivatestudentsdataComponent;
  let fixture: ComponentFixture<NinthprivatestudentsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinthprivatestudentsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinthprivatestudentsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
