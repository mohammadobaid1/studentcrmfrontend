import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinthcomputerclassComponent } from './ninthcomputerclass.component';

describe('NinthcomputerclassComponent', () => {
  let component: NinthcomputerclassComponent;
  let fixture: ComponentFixture<NinthcomputerclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinthcomputerclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinthcomputerclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
