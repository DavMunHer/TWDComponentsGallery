import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPlaygroundComponent } from './auth-playground.component';

describe('AuthPlaygroundComponent', () => {
  let component: AuthPlaygroundComponent;
  let fixture: ComponentFixture<AuthPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthPlaygroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
