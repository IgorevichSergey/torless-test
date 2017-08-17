import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeteriaListComponent } from './cafeteria-list.component';

describe('CreateCafeteriaComponent', () => {
  let component: CafeteriaListComponent;
  let fixture: ComponentFixture<CafeteriaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeteriaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeteriaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
