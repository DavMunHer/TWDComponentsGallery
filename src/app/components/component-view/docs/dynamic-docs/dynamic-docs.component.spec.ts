import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDocsComponent } from './dynamic-docs.component';

describe('DynamicDocsComponent', () => {
  let component: DynamicDocsComponent;
  let fixture: ComponentFixture<DynamicDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicDocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
