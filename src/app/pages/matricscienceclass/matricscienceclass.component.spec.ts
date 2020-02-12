import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricscienceclassComponent } from './matricscienceclass.component';

describe('MatricscienceclassComponent', () => {
  let component: MatricscienceclassComponent;
  let fixture: ComponentFixture<MatricscienceclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatricscienceclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatricscienceclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
