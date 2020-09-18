import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class ApiBaseService {
  public baseUrl: URL | string;

  constructor(protected httpClient: HttpClient) {}

  public callGet<T>(path): Observable<T> {
    return this.httpClient.get<T>(`${this.baseUrl}/${path}`);
  }

  public configure(baseUrl: URL | string): void {
    this.baseUrl = baseUrl;
  }
}
