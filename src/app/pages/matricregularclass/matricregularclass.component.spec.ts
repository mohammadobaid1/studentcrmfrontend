import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricregularclassComponent } from './matricregularclass.component';

describe('MatricregularclassComponent', () => {
  let component: MatricregularclassComponent;
  let fixture: ComponentFixture<MatricregularclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatricregularclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatricregularclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
