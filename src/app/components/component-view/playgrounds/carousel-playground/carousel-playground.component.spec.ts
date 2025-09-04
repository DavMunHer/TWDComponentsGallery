import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPlaygroundComponent } from './carousel-playground.component';

describe('CarouselPlaygroundComponent', () => {
  let component: CarouselPlaygroundComponent;
  let fixture: ComponentFixture<CarouselPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselPlaygroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
