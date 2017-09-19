import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCafeteriaModalComponent } from './select-cafeteria-modal.component';

describe('SelectCafeteriaModalComponent', () => {
  let component: SelectCafeteriaModalComponent;
  let fixture: ComponentFixture<SelectCafeteriaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCafeteriaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCafeteriaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
