import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { componentViewGuard } from './component-view.guard';

describe('componentViewGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => componentViewGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
