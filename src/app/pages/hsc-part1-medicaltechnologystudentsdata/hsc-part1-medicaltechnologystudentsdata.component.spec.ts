import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HscPart1MedicaltechnologystudentsdataComponent } from './hsc-part1-medicaltechnologystudentsdata.component';

describe('HscPart1MedicaltechnologystudentsdataComponent', () => {
  let component: HscPart1MedicaltechnologystudentsdataComponent;
  let fixture: ComponentFixture<HscPart1MedicaltechnologystudentsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HscPart1MedicaltechnologystudentsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HscPart1MedicaltechnologystudentsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
