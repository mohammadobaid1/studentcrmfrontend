import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HscPart1RegularPrivateclassComponent } from './hsc-part1-regular-privateclass.component';

describe('HscPart1RegularPrivateclassComponent', () => {
  let component: HscPart1RegularPrivateclassComponent;
  let fixture: ComponentFixture<HscPart1RegularPrivateclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HscPart1RegularPrivateclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HscPart1RegularPrivateclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
