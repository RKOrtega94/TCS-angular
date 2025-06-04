import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Interface definition added here
export interface ApiResponse<T> {
  data: T;
  message?: string;
}

@Injectable({ providedIn: 'root' })
export abstract class ApiService {
  #http = inject(HttpClient);

  private handleError(error: HttpErrorResponse): Observable<never> {
    // Log error to console or use a logging service
    console.error('ApiService error:', error);
    // Optionally, transform the error or extract a message from ApiResponse if backend sends errors in that format
    // For now, rethrow a user-friendly error or the original error
    return throwError(() => new Error('Something went wrong with the API request. Please try again later.'));
  }

  GET<T>(url: string, params?: Record<string, any>): Observable<T> {
    return this.#http.get<ApiResponse<T>>(url, { params }).pipe(
      map(response => response.data),
      catchError(this.handleError)
    );
  }

  POST<T>(
    url: string,
    body?: any,
    params?: Record<string, any>
  ): Observable<T> {
    return this.#http.post<ApiResponse<T>>(url, body, { params }).pipe(
      map(response => response.data),
      catchError(this.handleError)
    );
  }

  PUT<T>(url: string, body?: any, params?: Record<string, any>): Observable<T> {
    return this.#http.put<ApiResponse<T>>(url, body, { params }).pipe(
      map(response => response.data),
      catchError(this.handleError)
    );
  }

  DELETE<T>(url: string, params?: Record<string, any>): Observable<T> {
    return this.#http.delete<ApiResponse<T>>(url, { params }).pipe(
      map(response => response.data),
      catchError(this.handleError)
    );
  }
}
