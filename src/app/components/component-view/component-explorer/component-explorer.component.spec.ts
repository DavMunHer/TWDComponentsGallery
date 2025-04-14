import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExplorerComponent } from './component-explorer.component';

describe('ComponentExplorerComponent', () => {
  let component: ComponentExplorerComponent;
  let fixture: ComponentFixture<ComponentExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentExplorerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
