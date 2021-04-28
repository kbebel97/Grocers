import { TestBed } from '@angular/core/testing';

import { UserFundService } from './user-fund.service';

describe('UserFundService', () => {
  let service: UserFundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
