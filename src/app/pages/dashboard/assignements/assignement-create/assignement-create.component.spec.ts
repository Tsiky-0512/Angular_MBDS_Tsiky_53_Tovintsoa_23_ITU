import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignementCreateComponent } from './assignement-create.component';

describe('AssignementCreateComponent', () => {
  let component: AssignementCreateComponent;
  let fixture: ComponentFixture<AssignementCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignementCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignementCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
