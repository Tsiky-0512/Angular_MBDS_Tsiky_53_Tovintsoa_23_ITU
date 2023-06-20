import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignementListComponent } from './assignement-list.component';

describe('AssignementComponent', () => {
  let component: AssignementListComponent;
  let fixture: ComponentFixture<AssignementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignementListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
