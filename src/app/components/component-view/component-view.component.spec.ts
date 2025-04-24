import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentViewComponent } from './component-view.component';

describe('ComponentViewComponent', () => {
  let component: ComponentViewComponent;
  let fixture: ComponentFixture<ComponentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
