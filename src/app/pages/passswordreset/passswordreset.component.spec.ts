import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassswordresetComponent } from './passswordreset.component';

describe('PassswordresetComponent', () => {
  let component: PassswordresetComponent;
  let fixture: ComponentFixture<PassswordresetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassswordresetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassswordresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
