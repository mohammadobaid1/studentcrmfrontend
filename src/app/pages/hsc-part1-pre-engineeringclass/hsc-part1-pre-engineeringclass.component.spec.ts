import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HscPart1PreEngineeringclassComponent } from './hsc-part1-pre-engineeringclass.component';

describe('HscPart1PreEngineeringclassComponent', () => {
  let component: HscPart1PreEngineeringclassComponent;
  let fixture: ComponentFixture<HscPart1PreEngineeringclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HscPart1PreEngineeringclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HscPart1PreEngineeringclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
