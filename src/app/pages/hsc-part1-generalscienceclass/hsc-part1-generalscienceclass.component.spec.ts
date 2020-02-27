import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HscPart1GeneralscienceclassComponent } from './hsc-part1-generalscienceclass.component';

describe('HscPart1GeneralscienceclassComponent', () => {
  let component: HscPart1GeneralscienceclassComponent;
  let fixture: ComponentFixture<HscPart1GeneralscienceclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HscPart1GeneralscienceclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HscPart1GeneralscienceclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
