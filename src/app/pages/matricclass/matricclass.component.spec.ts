import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatricclassComponent } from './matricclass.component';

describe('MatricclassComponent', () => {
  let component: MatricclassComponent;
  let fixture: ComponentFixture<MatricclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatricclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatricclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
