import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HscPart1MedicaltechnologyclassComponent } from './hsc-part1-medicaltechnologyclass.component';

describe('HscPart1MedicaltechnologyclassComponent', () => {
  let component: HscPart1MedicaltechnologyclassComponent;
  let fixture: ComponentFixture<HscPart1MedicaltechnologyclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HscPart1MedicaltechnologyclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HscPart1MedicaltechnologyclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
