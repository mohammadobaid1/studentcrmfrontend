import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondyearclassComponent } from './secondyearclass.component';

describe('SecondyearclassComponent', () => {
  let component: SecondyearclassComponent;
  let fixture: ComponentFixture<SecondyearclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondyearclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondyearclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
