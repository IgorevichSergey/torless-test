import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCafeteriaComponent } from './edit-cafeteria.component';

describe('EditCafeteriaComponent', () => {
  let component: EditCafeteriaComponent;
  let fixture: ComponentFixture<EditCafeteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCafeteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCafeteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
