import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ssc1sciencehomeComponent } from './ssc1sciencehome.component';

describe('Ssc1sciencehomeComponent', () => {
  let component: Ssc1sciencehomeComponent;
  let fixture: ComponentFixture<Ssc1sciencehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ssc1sciencehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ssc1sciencehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
