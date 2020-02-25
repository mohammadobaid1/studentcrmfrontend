import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HscPart1PreMedicalstudentsdataComponent } from './hsc-part1-pre-medicalstudentsdata.component';

describe('HscPart1PreMedicalstudentsdataComponent', () => {
  let component: HscPart1PreMedicalstudentsdataComponent;
  let fixture: ComponentFixture<HscPart1PreMedicalstudentsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HscPart1PreMedicalstudentsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HscPart1PreMedicalstudentsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
