import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { apiInterceptor } from './api-interceptor';
import {
  HttpRequest,
  HttpHandlerFn,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from 'environments/environment';

describe('apiInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => apiInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
describe('apiInterceptor', () => {
  // ...existing tests...

  it('should prepend environment.apiUrl to the request URL', (done) => {
    const mockApiUrl = 'https://api.example.com';
    const originalEnv = { ...environment };
    environment.apiUrl = mockApiUrl;

    const req = new HttpRequest('GET', 'test-endpoint');
    const next: HttpHandlerFn = (request) => {
      expect(request.url).toBe(`${mockApiUrl}/test-endpoint`);
      return of(new HttpResponse({ status: 200 }));
    };

    apiInterceptor(req, next).subscribe(() => {
      environment.apiUrl = originalEnv.apiUrl; // restore
      done();
    });
  });

  it('should clone the request with the new URL', (done) => {
    const mockApiUrl = 'http://localhost:3000';
    const originalEnv = { ...environment };
    environment.apiUrl = mockApiUrl;

    const req = new HttpRequest('POST', 'foo/bar', { data: 123 });
    const next: HttpHandlerFn = (request) => {
      expect(request).not.toBe(req);
      expect(request.url).toBe(`${mockApiUrl}/foo/bar`);
      expect(request.method).toBe('POST');
      expect(request.body).toEqual({ data: 123 });
      return of(new HttpResponse({ status: 201 }));
    };

    apiInterceptor(req, next).subscribe(() => {
      environment.apiUrl = originalEnv.apiUrl; // restore
      done();
    });
  });

  it('should call next handler exactly once', (done) => {
    const mockApiUrl = 'http://localhost:4000';
    const originalEnv = { ...environment };
    environment.apiUrl = mockApiUrl;

    const req = new HttpRequest('DELETE', 'delete-me');
    let callCount = 0;
    const next: HttpHandlerFn = (request) => {
      callCount++;
      return of(new HttpResponse({ status: 204 }));
    };

    apiInterceptor(req, next).subscribe(() => {
      expect(callCount).toBe(1);
      environment.apiUrl = originalEnv.apiUrl; // restore
      done();
    });
  });
});
