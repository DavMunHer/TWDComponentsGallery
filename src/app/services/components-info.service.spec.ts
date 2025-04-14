import { TestBed } from '@angular/core/testing';

import { ComponentsInfoService } from './components-info.service';

describe('ComponentsInfoService', () => {
  let service: ComponentsInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentsInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
