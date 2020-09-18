import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ApiBaseService } from './api-base.service';

@Injectable({
  providedIn: 'root',
})
export class EnrolleeService extends ApiBaseService {
  public callEnrollees(): Observable<any> {
    return this.callGet('ttt');
  }
}
