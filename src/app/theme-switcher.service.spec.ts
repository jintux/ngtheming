import { TestBed, inject } from '@angular/core/testing';

import { ThemeSwitcherService } from './theme-switcher.service';

describe('ThemeSwitcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeSwitcherService]
    });
  });

  it('should be created', inject([ThemeSwitcherService], (service: ThemeSwitcherService) => {
    expect(service).toBeTruthy();
  }));
});
