import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSelectModalComponent } from './time-select-modal.component';

describe('TimeSelectModalComponent', () => {
  let component: TimeSelectModalComponent;
  let fixture: ComponentFixture<TimeSelectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSelectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSelectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
