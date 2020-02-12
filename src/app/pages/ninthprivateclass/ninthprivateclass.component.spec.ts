import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinthprivateclassComponent } from './ninthprivateclass.component';

describe('NinthprivateclassComponent', () => {
  let component: NinthprivateclassComponent;
  let fixture: ComponentFixture<NinthprivateclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinthprivateclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinthprivateclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
