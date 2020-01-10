import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstyearclassComponent } from './firstyearclass.component';

describe('FirstyearclassComponent', () => {
  let component: FirstyearclassComponent;
  let fixture: ComponentFixture<FirstyearclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstyearclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstyearclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
