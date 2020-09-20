import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class ApiBaseService {
  public baseUrl: URL | string;

  constructor(protected httpClient: HttpClient) {}

  public callGetSingle<T>(path: string, userId: string): Observable<T> {
    return this.httpClient.get<T>(`${this.baseUrl}/${path}/${userId}`);
  }

  public callGetMany<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(`${this.baseUrl}/${path}`);
  }

  public callPut(
    path: string,
    enrolleeId,
    requestBody
  ): Observable<ArrayBuffer> {
    return this.httpClient.put<any>(
      `${this.baseUrl}/${path}/${enrolleeId}`,
      requestBody
    );
  }

  public configure(baseUrl: URL | string): void {
    this.baseUrl = baseUrl;
  }
}
