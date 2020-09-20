import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { EnrolleeService } from './enrollee.service';
import { TEST_GOOD_ENROLLEE_ACTIVE } from 'src/test/models/test-enrollee';

describe('EnrolleeService', () => {
  let testEnrolleeService: EnrolleeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    testEnrolleeService = TestBed.inject(EnrolleeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(testEnrolleeService).toBeTruthy();
  });

  it('should call the fetchEnrollees endpoint', () => {
    let actual;
    const expected = TEST_GOOD_ENROLLEE_ACTIVE;

    testEnrolleeService.fetchEnrollees().subscribe((data) => (actual = data));

    const req = httpMock.expectOne((request) => request.method === 'GET');

    req.flush(TEST_GOOD_ENROLLEE_ACTIVE);

    expect(actual).toBe(expected);

    httpMock.verify();
  });
});
