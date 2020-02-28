import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HscmarksheetComponent } from './hscmarksheet.component';

describe('HscmarksheetComponent', () => {
  let component: HscmarksheetComponent;
  let fixture: ComponentFixture<HscmarksheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HscmarksheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HscmarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
