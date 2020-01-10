import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricstudentdataComponent } from './matricstudentdata.component';

describe('MatricstudentdataComponent', () => {
  let component: MatricstudentdataComponent;
  let fixture: ComponentFixture<MatricstudentdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatricstudentdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatricstudentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
