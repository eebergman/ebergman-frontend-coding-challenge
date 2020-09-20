import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Enrollee } from 'src/app/shared/models/enrollee';
import { ApiBaseService } from './api-base.service';

@Injectable({
  providedIn: 'root',
})
export class EnrolleeService extends ApiBaseService {
  public fetchEnrollees(): Observable<Enrollee> {
    return this.callGetMany('enrollees');
  }

  public fetchEnrolleeById(enrolleeId: string): Observable<Enrollee> {
    return this.callGetSingle('enrollees', enrolleeId);
  }
}
