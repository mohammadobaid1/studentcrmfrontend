import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hsc1generalhomeComponent } from './hsc1generalhome.component';

describe('Hsc1generalhomeComponent', () => {
  let component: Hsc1generalhomeComponent;
  let fixture: ComponentFixture<Hsc1generalhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hsc1generalhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hsc1generalhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
