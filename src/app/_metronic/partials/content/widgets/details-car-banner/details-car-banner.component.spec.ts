import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCarBannerComponent } from './details-car-banner.component';

describe('DetailsCarBannerComponent', () => {
  let component: DetailsCarBannerComponent;
  let fixture: ComponentFixture<DetailsCarBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCarBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCarBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
