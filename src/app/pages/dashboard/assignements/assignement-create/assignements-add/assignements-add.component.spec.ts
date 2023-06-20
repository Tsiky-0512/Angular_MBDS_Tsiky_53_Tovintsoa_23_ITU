import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignementsAddComponent } from './assignements-add.component';

describe('AssignementsAddComponent', () => {
  let component: AssignementsAddComponent;
  let fixture: ComponentFixture<AssignementsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignementsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignementsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
