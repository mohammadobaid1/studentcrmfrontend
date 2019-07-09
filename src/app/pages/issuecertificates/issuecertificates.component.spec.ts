import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuecertificatesComponent } from './issuecertificates.component';

describe('IssuecertificatesComponent', () => {
  let component: IssuecertificatesComponent;
  let fixture: ComponentFixture<IssuecertificatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuecertificatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuecertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
