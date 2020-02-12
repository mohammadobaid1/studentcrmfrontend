import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ssc2generalhomeComponent } from './ssc2generalhome.component';

describe('Ssc2generalhomeComponent', () => {
  let component: Ssc2generalhomeComponent;
  let fixture: ComponentFixture<Ssc2generalhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ssc2generalhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ssc2generalhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
