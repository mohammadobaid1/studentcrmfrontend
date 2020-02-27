import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HscPart1PreMedicalclassComponent } from './hsc-part1-pre-medicalclass.component';

describe('HscPart1PreMedicalclassComponent', () => {
  let component: HscPart1PreMedicalclassComponent;
  let fixture: ComponentFixture<HscPart1PreMedicalclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HscPart1PreMedicalclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HscPart1PreMedicalclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
