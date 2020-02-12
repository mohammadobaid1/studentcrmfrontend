import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinthregularclassComponent } from './ninthregularclass.component';

describe('NinthregularclassComponent', () => {
  let component: NinthregularclassComponent;
  let fixture: ComponentFixture<NinthregularclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinthregularclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinthregularclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
