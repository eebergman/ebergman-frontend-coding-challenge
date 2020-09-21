import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Enrollee } from 'src/app/shared/models/enrollee';
import { ApiBaseService } from './api-base.service';
import { HttpClient } from '@angular/common/http';
import { UpdateEnrollee } from 'src/app/shared/models/update-enrollee';

@Injectable({
  providedIn: 'root',
})
export class EnrolleeService extends ApiBaseService<Enrollee> {
  constructor(protected httpClient: HttpClient) {
    super('enrollees', httpClient);
  }

  public fetchEnrollees(): Observable<[Enrollee]> {
    return this.callGetMany();
  }

  public fetchEnrolleeById(enrolleeId: string): Observable<Enrollee> {
    if (enrolleeId == null) {
      throw new Error(
        'Required parameter enrolleeId was null or undefined when calling fetchEnrolleeById.'
      );
    }
    return this.callGetSingle(enrolleeId);
  }

  public updateSingleEnrollee(
    enrolleeID: string,
    updateEnrollee: UpdateEnrollee
  ): Observable<ArrayBuffer> {
    return this.callPut(enrolleeID, updateEnrollee);
  }
}
