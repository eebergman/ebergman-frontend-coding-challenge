import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { EnrolleeService } from 'src/app/core/services/enrollee.service';
import { Enrollee } from 'src/app/shared/models/enrollee';
import { TEST_GOOD_ENROLLEE_ACTIVE } from '../test-enrollee';

@Injectable()
export class MockEnrolleeService extends EnrolleeService {
  fetchEnrollees(): Observable<Enrollee> {
    return of(TEST_GOOD_ENROLLEE_ACTIVE);
  }
}
