import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifynewpasswordComponent } from './verifynewpassword.component';

describe('VerifynewpasswordComponent', () => {
  let component: VerifynewpasswordComponent;
  let fixture: ComponentFixture<VerifynewpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifynewpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifynewpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
