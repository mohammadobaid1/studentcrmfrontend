import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinthclassComponent } from './ninthclass.component';

describe('NinthclassComponent', () => {
  let component: NinthclassComponent;
  let fixture: ComponentFixture<NinthclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinthclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinthclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
