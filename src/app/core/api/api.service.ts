import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiResponse } from './api.response.interface';

@Injectable({ providedIn: 'root' })
export abstract class ApiService {
  #http = inject(HttpClient);

  GET<T>(url: string, params?: Record<string, any>): Observable<T> {
    return this.#http.get<ApiResponse<T>>(url, { params }).pipe(
      map((response) => response.data),
      catchError(this.#hadleError)
    );
  }

  POST<T>(
    url: string,
    body?: any,
    params?: Record<string, any>
  ): Observable<T> {
    return this.#http.post<ApiResponse<T>>(url, body, { params }).pipe(
      map((response) => response.data),
      catchError(this.#hadleError)
    );
  }

  PUT<T>(url: string, body?: any, params?: Record<string, any>): Observable<T> {
    return this.#http.put<ApiResponse<T>>(url, body, { params }).pipe(
      map((response) => response.data),
      catchError(this.#hadleError)
    );
  }

  DELETE<T>(url: string, params?: Record<string, any>): Observable<T> {
    return this.#http.delete<ApiResponse<T>>(url, { params }).pipe(
      map((response) => response.data),
      catchError(this.#hadleError)
    );
  }

  #hadleError(error: HttpErrorResponse): Observable<never> {
    console.error(error);
    return throwError(() => new Error(error.message));
  }
}
