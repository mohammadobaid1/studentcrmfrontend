import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricprivateclassComponent } from './matricprivateclass.component';

describe('MatricprivateclassComponent', () => {
  let component: MatricprivateclassComponent;
  let fixture: ComponentFixture<MatricprivateclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatricprivateclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatricprivateclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
