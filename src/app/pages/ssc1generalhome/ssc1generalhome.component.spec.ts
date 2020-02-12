import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ssc1generalhomeComponent } from './ssc1generalhome.component';

describe('Ssc1generalhomeComponent', () => {
  let component: Ssc1generalhomeComponent;
  let fixture: ComponentFixture<Ssc1generalhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ssc1generalhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ssc1generalhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
