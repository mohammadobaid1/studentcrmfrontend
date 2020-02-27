import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HscPart1PreEngineeringstudentsdataComponent } from './hsc-part1-pre-engineeringstudentsdata.component';

describe('HscPart1PreEngineeringstudentsdataComponent', () => {
  let component: HscPart1PreEngineeringstudentsdataComponent;
  let fixture: ComponentFixture<HscPart1PreEngineeringstudentsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HscPart1PreEngineeringstudentsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HscPart1PreEngineeringstudentsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
