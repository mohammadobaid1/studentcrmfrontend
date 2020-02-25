import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HscPart1RegularPrivatestudentsdataComponent } from './hsc-part1-regular-privatestudentsdata.component';

describe('HscPart1RegularPrivatestudentsdataComponent', () => {
  let component: HscPart1RegularPrivatestudentsdataComponent;
  let fixture: ComponentFixture<HscPart1RegularPrivatestudentsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HscPart1RegularPrivatestudentsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HscPart1RegularPrivatestudentsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
