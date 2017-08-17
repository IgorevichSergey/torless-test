import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMainCategoryComponent } from './create-main-category.component';

describe('CreateMainCategoryComponent', () => {
  let component: CreateMainCategoryComponent;
  let fixture: ComponentFixture<CreateMainCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMainCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMainCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
