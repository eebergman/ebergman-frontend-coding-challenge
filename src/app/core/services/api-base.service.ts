import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class ApiBaseService {
  public baseUrl: URL | string;

  constructor(protected httpClient: HttpClient) {}

  public callGet<T>(path: string, enrolleeId?: string): Observable<T> {
    if (enrolleeId) {
      return this.httpClient.get<T>(`${this.baseUrl}/${path}/${enrolleeId}`);
    }
    return this.httpClient.get<T>(`${this.baseUrl}/${path}`);
  }

  public callPut(path, enrolleeId, requestBody): Observable<ArrayBuffer> {
    return this.httpClient.put<any>(
      `${this.baseUrl}/${path}/${enrolleeId}`,
      requestBody
    );
  }

  public configure(baseUrl: URL | string): void {
    this.baseUrl = baseUrl;
  }
}
