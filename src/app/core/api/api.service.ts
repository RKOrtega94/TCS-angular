import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export abstract class ApiService {
  #http = inject(HttpClient);

  GET<T>(url: string, params?: Record<string, any>): Observable<T> {
    return this.#http.get<T>(url, { params });
  }

  POST<T>(
    url: string,
    body?: any,
    params?: Record<string, any>
  ): Observable<T> {
    return this.#http.post<T>(url, body, { params });
  }

  PUT<T>(url: string, body?: any, params?: Record<string, any>): Observable<T> {
    return this.#http.put<T>(url, body, { params });
  }

  DELETE<T>(url: string, params?: Record<string, any>): Observable<T> {
    return this.#http.delete<T>(url, { params });
  }
}
