import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ssc2sciencehomeComponent } from './ssc2sciencehome.component';

describe('Ssc2sciencehomeComponent', () => {
  let component: Ssc2sciencehomeComponent;
  let fixture: ComponentFixture<Ssc2sciencehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ssc2sciencehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ssc2sciencehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
