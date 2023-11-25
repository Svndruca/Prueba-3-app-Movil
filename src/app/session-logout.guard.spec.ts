import { TestBed } from '@angular/core/testing';

import { SessionLogoutGuard } from './session-logout.guard';

describe('SessionLogoutGuard', () => {
  let guard: SessionLogoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SessionLogoutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
