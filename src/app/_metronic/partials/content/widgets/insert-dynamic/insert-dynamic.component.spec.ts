import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDynamicComponent } from './insert-dynamic.component';

describe('InsertDynamicComponent', () => {
  let component: InsertDynamicComponent;
  let fixture: ComponentFixture<InsertDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
