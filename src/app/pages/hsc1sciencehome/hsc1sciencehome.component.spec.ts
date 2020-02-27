import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hsc1sciencehomeComponent } from './hsc1sciencehome.component';

describe('Hsc1sciencehomeComponent', () => {
  let component: Hsc1sciencehomeComponent;
  let fixture: ComponentFixture<Hsc1sciencehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hsc1sciencehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hsc1sciencehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
