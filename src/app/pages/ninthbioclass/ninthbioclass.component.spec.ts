import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinthbioclassComponent } from './ninthbioclass.component';

describe('NinthbioclassComponent', () => {
  let component: NinthbioclassComponent;
  let fixture: ComponentFixture<NinthbioclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinthbioclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinthbioclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
