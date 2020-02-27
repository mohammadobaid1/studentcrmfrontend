import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HscPart1GeneralsciencestudentsdataComponent } from './hsc-part1-generalsciencestudentsdata.component';

describe('HscPart1GeneralsciencestudentsdataComponent', () => {
  let component: HscPart1GeneralsciencestudentsdataComponent;
  let fixture: ComponentFixture<HscPart1GeneralsciencestudentsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HscPart1GeneralsciencestudentsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HscPart1GeneralsciencestudentsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
