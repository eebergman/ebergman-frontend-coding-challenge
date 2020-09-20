import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class ApiBaseService<T> {
  public baseUrl: URL | string;
  public resourcePath: string;

  constructor(resourcePath: string, protected httpClient: HttpClient) {
    this.resourcePath = resourcePath;
  }

  protected callGetSingle(userId: string): Observable<T> {
    return this.httpClient.get<T>(
      `${this.baseUrl}/${this.resourcePath}/${userId}`
    );
  }

  protected callGetMany(): Observable<[T]> {
    return this.httpClient.get<[T]>(`${this.baseUrl}/${this.resourcePath}`);
  }

  protected callPut(enrolleeId, requestBody): Observable<ArrayBuffer> {
    return this.httpClient.put<any>(
      `${this.baseUrl}/${this.resourcePath}/${enrolleeId}`,
      requestBody
    );
  }

  public configure(baseUrl: URL | string): void {
    this.baseUrl = baseUrl;
  }
}
