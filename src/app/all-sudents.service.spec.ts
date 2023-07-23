import { TestBed } from '@angular/core/testing';

import { AllSudentsService } from './all-sudents.service';

describe('AllSudentsService', () => {
  let service: AllSudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllSudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
